import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np
import cv2

def preprocess_image(image_path):
    image = cv2.imread(image_path)
    resized_image = cv2.resize(image, (256, 256))
    input_image = np.expand_dims(resized_image, axis=0)   
    return input_image

def get_predictions(model, input_image):
    predictions = model.predict(input_image)
    return predictions

model_path = 'pretrained_weights/soil_type_1.h5'
model = load_model(model_path)
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
image_path = 'images/test_soil.jpeg'
input_image = preprocess_image(image_path)
predictions = get_predictions(model, input_image)

print(np.argmax(predictions))
