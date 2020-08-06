import psycopg2
import psycopg2.extras
import csv
from pprint import pprint
from psycopg2.extensions import AsIs

def connect():
	#connecting to postgres database
	try:
		connection = psycopg2.connect(user = "", #ADD USER
                                  password = "", #ADD PASSWORD
                                  host = "", #ADD HOST
                                  port = "", #ADD PORT
                                  database = "") #ADD DATABASE
		return connection
	except Exception as e:
		raise e

def clean_data():
	#reading in employee data and returning as a list of dictionaries
	with open("VMware_Employee_Report_raw.txt", mode='r', encoding='cp1252') as file:
		reader = csv.DictReader(file, delimiter='\t')
		data = [dict(line) for line in reader]
	return data

def insert(data):
	#inserting employee data to database, cleaning all entires with single quotes to not cause any syntax errors
	cursor = connection.cursor()
	try:
		for entry in data:
			for key in list(entry.keys()):
				if entry[key] == None:
					entry[key] = "None"
				if "'" in entry[key]:
					entry[key] = entry[key].replace("'", "''")

			query = f"INSERT INTO member_data.employee_data VALUES (\'{AsIs(entry['Name'])}\', \'{AsIs(int(entry['VMware (EMC) ID']))}\', \'{AsIs((entry['Top Level Organization']))}\', \'{AsIs((entry['Country Name']))}\', \'{AsIs((entry['Location']))}\', \'{AsIs((entry['Region']))}\', \'{AsIs((entry['Region Group']))}\', \'{AsIs((entry['Supervisory Organization Level 2']))}\', \'{AsIs((entry['Supervisory Organization Level 2 Owner']))}\', \'{AsIs((entry['Supervisory Organization Level 3']))}\', \'{AsIs((entry['Supervisory Organization Level 3 Owner']))}\', \'{AsIs((entry['Supervisory Organization Level 4']))}\', \'{AsIs((entry['Supervisory Organization Level 4 Owner']))}\', \'{AsIs((entry['Supervisory Organization Level 5']))}\', \'{AsIs((entry['Supervisory Organization Level 5 Owner']))}\', \'{AsIs((entry['Supervisory Organization Level 6']))}\', \'{AsIs((entry['Supervisory Organization Level 6 Owner']))}\', \'{AsIs((entry['Supervisory Organization Level 7']))}\', \'{AsIs((entry['Supervisory Organization Level 7 Owner']))}\', \'{AsIs((entry['Supervisory Organization Level 8']))}\', \'{AsIs((entry['Supervisory Organization Level 8 Owner']))}\');"
			cursor.execute(query)
			connection.commit()

	except Exception as e:
		raise e


def clean():
	#cleaning LastName, FirstName format as FirstName, LastName to match with our POD data
	cursor = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
	cursor.execute("select * from member_data.employee_data;")
	result = cursor.fetchall()
	for entry in result:
		nameList = entry['name'].split(", ")
		reformattedName = f'{nameList[1]} {nameList[0]}'
		cleaned_format_name = reformattedName.replace("'", "''")
		cursor.execute(f"update member_data.employee_data set formattedname = '{cleaned_format_name}' where emp_id = '{entry['emp_id']}';")
		connection.commit()
	cursor.close()


if __name__ == '__main__':
	#calling all functions
	connection = connect()
	data = clean_data()
	insert(data)
	clean()
	print("done")
	connection.close()
