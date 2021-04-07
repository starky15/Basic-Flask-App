from flask import Flask, redirect, render_template, url_for, request, jsonify, json
import argparse
import os
from shutil import copyfile



my_path = os.path.abspath(os.path.dirname(__file__))

main_path = os.path.join(my_path, "")

# app = Flask(__name__)


app = Flask(__name__)
app.debug = False
app.config['SECRET_KEY'] = '$_0031$%^1<.,{{09@)cvsj__&'

@app.route("/")
def index():
    return redirect(url_for('launch'))
    
    
@app.route("/launch/", methods=["post","get"])
def launch():
    return render_template('layout.html')
    
    
    

@app.route("/launched", methods=['GET', 'POST'])
def launched():
    if request.method=="POST":
    	prop = request.form.get('prop')
    	val = request.form.get('val')
    	print(prop)
    	print(val)
    	return render_template('layout.html')


if __name__ == "__main__":

    port= 9090
    parser = argparse.ArgumentParser(description = "To update extra configurations.")
    parser.add_argument("-H", "--Help", help = "This Bot is used to update extra configurations. This application uses port 9090 by default. If in case you need to change the port, please pass --port along with port", required = False, default = "")
    parser.add_argument("-p", "--port", help = "send addtional port as argument, if port 9090 is busy.", required = False, default = 9090)
    argument = parser.parse_args()

    if argument.port:
        port = argument.port

    app.run(debug=True,host='0.0.0.0', port=port)