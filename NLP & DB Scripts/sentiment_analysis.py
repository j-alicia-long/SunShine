from nltk.sentiment.vader import SentimentIntensityAnalyzer
import psycopg2
import psycopg2.extras
from pprint import pprint
import datetime as dt
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

def analyze_sentiment(text):
	#analyzing sentiment of text through nltk's sentiment vader, creating an instance of sentimentintensityanalyzer, and extracting sentiment score
	sid = SentimentIntensityAnalyzer()
	score = sid.polarity_scores(text)
	return score['neg'], score['neu'], score['pos'], score['compound']


def insert(result, scores):
	#entering POD data to database and handling exceptions along the way
	cursor = connection.cursor()
	try:
		inserted = []
		for entry in result:
			for item in scores:
				inserted_question_ids = [x[0] for x in inserted]
				inserted_landing_ids = [x[1] for x in inserted]
				inserted_form_ids = [x[2] for x in inserted]
				if str(dict(entry)['answer']) == str(item['word']) and ("'" not in str(item['word'])) and (entry['question_id'], entry['landing_id'], entry['form_id']) not in inserted:
				#if str(dict(entry)['answer']) == str(item['word']) and ("'" not in str(item['word'])) and ((entry['question_id'] not in inserted_question_ids) or (entry['question_id'] in inserted_question_ids and entry['landing_id'] not in inserted_landing_ids) or (entry['landing_id'] in inserted_landing_ids and entry['form_id'] not in inserted_form_ids)):
					query = f"INSERT INTO vmaware_surveys_fff.sentiment_analysis VALUES (\'{AsIs(entry['form_id'])}\', \'{AsIs(entry['landing_id'])}\', \'{AsIs((entry['question_id']))}\', \'{AsIs((entry['title']))}\', \'{AsIs((entry['answer']))}\', {(item['positive'])}, {(item['neutral'])}, {(item['negative'])}, {(item['compound'])});"
					cursor.execute(query)
					connection.commit()
					inserted.append((entry['question_id'], entry['landing_id'], entry['form_id']))
					print('properly inserted!')

				elif str(dict(entry)['answer']) == str(item['word']) and ("'" in str(item['word']) or "'" in str(entry['title'])) and (entry['question_id'], entry['landing_id'], entry['form_id']) not in inserted:
				#elif str(dict(entry)['answer']) == str(item['word']) and ("'" in str(item['word']) or "'" in str(entry['title'])) and ((entry['question_id'] not in inserted_question_ids) or (entry['question_id'] in inserted_question_ids and entry['landing_id'] not in inserted_landing_ids) or (entry['landing_id'] in inserted_landing_ids and entry['form_id'] not in inserted_form_ids)):
					entry['answer'] = item['word'].replace("'", "''")
					entry['title'] = entry['title'].replace("'", "''")
					query = f"INSERT INTO vmaware_surveys_fff.sentiment_analysis VALUES (\'{AsIs(entry['form_id'])}\', \'{AsIs(entry['landing_id'])}\', \'{AsIs((entry['question_id']))}\', \'{AsIs((entry['title']))}\', \'{AsIs((entry['answer']))}\', {(item['positive'])}, {(item['neutral'])}, {(item['negative'])}, {(item['compound'])});"
					cursor.execute(query)
					connection.commit()
					inserted.append((entry['question_id'], entry['landing_id'], entry['form_id']))
					print('properly inserted!')
	except Exception as e:
		raise e


if __name__ == '__main__':
	#extracting question answers and calling all functions, storing sentiment score results to a table
	connection = connect()
	cursor = connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
	cursor.execute("DELETE FROM vmaware_surveys_fff.sentiment_analysis;")
	cursor.execute("SELECT b.title, a.answer, a.question_id, b.form_id, a.landing_id FROM vmaware_surveys_fff.answers a JOIN vmaware_surveys_fff.questions b ON a.question_id = b.question_id;")
	cursor_result = cursor.fetchall()
	print("cursor result" + str(cursor_result))
	words = [x['answer'] for x in cursor_result]
	scores = []
	for word in words:
		result = analyze_sentiment(word)
		scores.append({'word': word, 'negative': result[0], 'neutral': result[1], 'positive': result[2], 'compound': result[3]})
	cursor.close()
	insert(cursor_result, scores)
	connection.close()
