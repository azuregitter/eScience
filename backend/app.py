# Import flask and datetime module for showing date and time
from flask import Flask, jsonify
import datetime
from flask_mysqldb import MySQL

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
app.config['MYSQL_HOST'] = 'db4free.net'
app.config['MYSQL_USER'] = 'barangayaguho_28'
app.config['MYSQL_PASSWORD'] = 'barangayaguho_30'
app.config['MYSQL_DB'] = 'barangayaguho_24'
# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = 'qwerty'
# app.config['MYSQL_DB'] = 'eScience'
mysql = MySQL(app)


# Route for seeing a data
@app.route('/data', methods=['GET'])
def get_data():
    cur = mysql.connection.cursor()
    cur.execute('''SELECT * FROM TestTable''')
    row_headers=[x[0] for x in cur.description] #this will extract row headers
    rv = cur.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers, result)))
    cur.close()
    return jsonify(json_data)


# Running app
if __name__ == '__main__':
    app.run(debug=True)
