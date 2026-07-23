from flask import Flask, render_template, request
import os
import pandas as pd

app = Flask(__name__)

# Create uploads folder if it doesn't exist
UPLOAD_FOLDER = "uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


@app.route("/prediction")
def prediction():
    return render_template("prediction.html")


@app.route("/analytics")
def analytics():
    return render_template("analytics.html")


@app.route("/recommendation")
def recommendation():
    return render_template("recommendation.html")


# UPDATED UPLOAD ROUTE
@app.route("/upload", methods=["GET", "POST"])
def upload():

    if request.method == "POST":

        file = request.files.get("file")

        if file and file.filename != "":

            filepath = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
            file.save(filepath)

            df = pd.read_csv(filepath)

            return render_template(
                "upload.html",
                message="Dataset uploaded successfully!",
                tables=df.head().to_html(
                    classes="table table-striped",
                    index=False
                )
            )

        return render_template(
            "upload.html",
            message="Please select a CSV file."
        )

    return render_template("upload.html")


@app.route("/report")
def report():
    return render_template("report.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


if __name__ == "__main__":
    app.run(debug=True)