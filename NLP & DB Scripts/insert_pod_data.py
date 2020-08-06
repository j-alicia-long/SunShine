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
	#reading in POD member data, adding column to designate POD, combinding all of them, and returning as a list of dictionaries
	with open("Asian@VMware.txt", 'r') as file:
		reader = csv.DictReader(file, delimiter='\t')
		asian_data = [dict(line) for line in reader]
	cleaned_asian_data = []
	for data in asian_data:
		cleaned_asian_data.append({"POD": "Asian@VMware", 'Name': data['Name'], 'Title': data['Title'], 'Department': data['Department'], 'Location': data['Location']})
	with open("Black@VMware.txt", 'r') as file:
		reader = csv.DictReader(file, delimiter='\t')
		black_data = [dict(line) for line in reader]
	cleaned_black_data = []
	for data in black_data:
		cleaned_black_data.append({"POD": "Black@VMware", 'Name': data['Name'], 'Title': data['Title'], 'Department': data['Department'], 'Location': data['Location']})
	with open("Disability@VMware.txt", 'r') as file:
		reader = csv.DictReader(file, delimiter='\t')
		disability_data = [dict(line) for line in reader]
	cleaned_disability_data = []
	for data in disability_data:
		cleaned_disability_data.append({"POD": "Disability@VMware", 'Name': data['Name'], 'Title': data['Title'], 'Department': data['Department'], 'Location': data['Location']})
	with open("Latinos@VMware.txt", 'r') as file:
		reader = csv.DictReader(file, delimiter='\t')
		latinos_data = [dict(line) for line in reader]
	cleaned_latinos_data = []
	for data in latinos_data:
		cleaned_latinos_data.append({"POD": "Latinos@VMware", 'Name': data['Name'], 'Title': data['Title'], 'Department': data['Department'], 'Location': data['Location']})
	with open("PRIDE@VMware.txt", 'r') as file:
		reader = csv.DictReader(file, delimiter='\t')
		pride_data = [dict(line) for line in reader]
	cleaned_pride_data = []
	for data in pride_data:
		cleaned_pride_data.append({"POD": "PRIDE@VMware", 'Name': data['Name'], 'Title': data['Title'], 'Department': data['Department'], 'Location': data['Location']})
	with open("Veterans@VMware.txt", 'r') as file:
		reader = csv.DictReader(file, delimiter='\t')
		veterans_data = [dict(line) for line in reader]
	cleaned_veterans_data = []
	for data in veterans_data:
		cleaned_veterans_data.append({"POD": "Veterans@VMware", 'Name': data['Name'], 'Title': data['Title'], 'Department': data['Department'], 'Location': data['Location']})
	with open("Women@VMware.txt", 'r') as file:
		reader = csv.DictReader(file, delimiter='\t')
		women_data = [dict(line) for line in reader]
	cleaned_women_data = []
	for data in women_data:
		cleaned_women_data.append({"POD": "Women@VMware", 'Name': data['Name'], 'Title': data['Title'], 'Department': data['Department'], 'Location': data['Location']})

	return cleaned_asian_data + cleaned_black_data + cleaned_latinos_data + cleaned_women_data + cleaned_veterans_data + cleaned_disability_data + cleaned_pride_data


def insert(data):
	#entering POD data to database and handling exceptions along the way
	cursor = connection.cursor()
	try:
		for entry in data:
			if entry['Name'] == None:
				entry["Name"] = "None"
			elif entry['Title'] == None:
				entry["Title"] = "None"
			elif entry['Department'] == None:
				entry["Department"] = "None"
			elif entry['Location'] == None:
				entry['Location'] = "None"

			if "'" not in str(entry['Name']) and "'" not in str(entry['Title']) and "'" not in str(entry['Department']) and "'" not in str(entry['Location']):
				query = f"INSERT INTO member_data.pod_data VALUES (\'{AsIs(entry['POD'])}\', \'{AsIs(entry['Name'])}\', \'{AsIs((entry['Title']))}\', \'{AsIs((entry['Department']))}\', \'{AsIs((entry['Location']))}\');"
				cursor.execute(query)
				connection.commit()
			else:
				entry['Name'] = entry['Name'].replace("'", "''")
				entry['Title'] = entry['Title'].replace("'", "''")
				entry['Department'] = entry['Department'].replace("'", "''")
				entry['Location'] = entry['Location'].replace("'", "''")
				query = f"INSERT INTO member_data.pod_data VALUES (\'{AsIs(entry['POD'])}\', \'{AsIs(entry['Name'])}\', \'{AsIs((entry['Title']))}\', \'{AsIs((entry['Department']))}\', \'{AsIs((entry['Location']))}\');"
				cursor.execute(query)
				connection.commit()
	except Exception as e:
		raise e


if __name__ == '__main__':
	#calling all functions
	connection = connect()
	data = clean_data()
	insert(data)
	print("done")