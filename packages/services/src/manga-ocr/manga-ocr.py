import sys
import base64
from io import BytesIO
from PIL import Image
from manga_ocr import MangaOcr

def recognize_text(image_buffer, mocr):
    try:
        # Open the image from the byte buffer
        image = Image.open(BytesIO(image_buffer))

        # Perform OCR using pytesseract
        text = mocr(image)

        return text.strip()

    except Exception as e:
        return f"Error: {e}"

if __name__ == "__main__":
    mocr = MangaOcr()
    try:
        while True:
            # Read the image buffer from stdin
            image_buffer = sys.stdin.buffer.read()

            # Check if the received data is not empty
            if not image_buffer:
                break

            # Recognize text from the image buffer
            result_text = recognize_text(image_buffer, mocr)

            # Write the recognized text to stdout
            print(result_text)
            sys.stdout.flush()

    except (BrokenPipeError, IOError):
        # Handle the case when Node.js disconnects
        pass
