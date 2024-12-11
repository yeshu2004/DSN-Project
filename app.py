from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import base64
import mediapipe as mp  # <-- Add this line to import mediapipe

# Initialize Mediapipe Pose for real-time processing
mp_pose = mp.solutions.pose  # <-- Initialize mp_pose here
pose_video = mp_pose.Pose(static_image_mode=False, min_detection_confidence=0.5, model_complexity=1)

from yogatrainer2 import detectAndClassifyPose

app = Flask(__name__)
CORS(app)

@app.route('/detect', methods=['POST'])
def detect_pose():
    data = request.json.get("image")
    nparr = np.frombuffer(base64.b64decode(data.split(',')[1]), np.uint8)
    frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    output_frame, label = detectAndClassifyPose(frame, pose_video)
    _, buffer = cv2.imencode('.jpg', output_frame)
    encoded_image = base64.b64encode(buffer).decode('utf-8')

    return jsonify({"label": label, "image": f"data:image/jpeg;base64,{encoded_image}"})

if __name__ == "__main__":
    app.run(debug=True)
