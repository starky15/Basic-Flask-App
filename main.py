from flask import Flask, redirect, render_template, url_for, request, jsonify, json
import argparse
import os
from shutil import copyfile



my_path = os.path.abspath(os.path.dirname(__file__))

main_path = os.path.join(my_path, "")

# app = Flask(__name__)
tool_name = 'solarwinds'
version = '2020.2'

app = Flask(__name__)
app.debug = False
app.config['SECRET_KEY'] = '$_0031$%^1<.,{{09@)cvsj__&'

Admin_Root = os.environ['Admin_Root']
path = Admin_Root+'/iDeploy/onboarding/tools/solarwinds/src/solarwinds_device_onboard/input/'


@app.route("/")
def index():
    return redirect(url_for('launch'))
    
    
@app.route("/launch/", methods=["post","get"])
def launch():
    return render_template('layout.html')
    
    
    

@app.route("/onboardFD", methods=['GET', 'POST'])
def submit_form_page():
    if request.method=="POST":
        content = request.json
        AutoImportStatus = []
        AutoImportVlanPortTypes = []
        AutoImportVirtualTypes = []
        AutoImportExpressionFilter =[]
        
        for j in range(len(content)):
            empty_dic = content[j].copy()
            for i in content[j].keys():
                if i == 'status1':
                    AutoImportStatus.append(content[j][i])
                    del empty_dic[i]
                if i == 'status2':
                    AutoImportStatus.append(content[j][i]) 
                    del empty_dic[i]
                if i == 'status3':
                    AutoImportStatus.append(content[j][i]) 
                    del empty_dic[i]

                if i == 'port_mode1':
                    AutoImportVlanPortTypes.append(content[j][i])
                    del empty_dic[i]
                if i == 'port_mode2':
                    AutoImportVlanPortTypes.append(content[j][i])
                    del empty_dic[i]
                if i == 'port_mode3':
                    AutoImportVlanPortTypes.append(content[j][i])
                    del empty_dic[i]

                if i == 'hardware1':
                    AutoImportVirtualTypes.append(content[j][i])
                    del empty_dic[i]
                if i == 'hardware2':
                    AutoImportVirtualTypes.append(content[j][i]) 
                    del empty_dic[i]
                if i == 'hardware3':
                    AutoImportVirtualTypes.append(content[j][i])  
                    del empty_dic[i]

            AutoImportExpressionFilter.append(empty_dic)

        
        final_dict = {
        'AutoImportVirtualTypes' : list(set(AutoImportVirtualTypes)),
        'AutoImportVlanPortTypes' : list(set(AutoImportVlanPortTypes)),
        'AutoImportStatus' : list(set(AutoImportStatus)),
        'AutoImportExpressionFilter' : AutoImportExpressionFilter
        }
        

        try:
            file = 'sol_interface_config.json'
            f = open(file,'w')
            f.write(json.dumps(final_dict))
            f.close()
            src = file
            dst = path+file
            print(dst)
            copyfile(src, dst)
        except:
            pass
        
    return jsonify(status="pass")


if __name__ == "__main__":

    port= 9090
    parser = argparse.ArgumentParser(description = "To update extra configurations.")
    parser.add_argument("-H", "--Help", help = "This Bot is used to update extra configurations. This application uses port 9090 by default. If in case you need to change the port, please pass --port along with port", required = False, default = "")
    parser.add_argument("-p", "--port", help = "send addtional port as argument, if port 9090 is busy.", required = False, default = 9090)
    argument = parser.parse_args()

    if argument.port:
        port = argument.port

    app.run(debug=False,host='0.0.0.0', port=port)