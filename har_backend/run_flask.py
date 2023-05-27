import os
import subprocess

if __name__ == "__main__":
    # Set environment variables
    os.environ["FLASK_APP"] = "route.py"
    os.environ["FLASK_DEBUG"] = "1"
    
    # Run the Flask app
    subprocess.run(["flask", "run"])
