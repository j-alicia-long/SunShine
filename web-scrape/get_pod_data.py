"""
Jennifer Long, 8/4/2020
This is a quick web-scraping script that uses Selenium for Python
and ChromeDriver
Note: Need to install Python 3 Selenium and place chromedriver in path
"""

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager # For chromedriver

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from selenium.common.exceptions import NoSuchElementException
import time

# Insert valid credentials here
USERNAME = "PLACEHOLDER"
PASSWORD = "PLACEHOLDER"

########## FUNCTIONS ##########

def login_to_rsa(driver, username, password):
	driver.get("https://social.vmware.com")
	# Login to RSA
	username_input = WebDriverWait(driver, 20).until(
		EC.presence_of_element_located((By.ID, "username"))
	)
	# username = driver.find_element_by_id("username")
	username_input.send_keys(username)
	password_input = driver.find_element_by_id("password")
	password_input.send_keys(password, Keys.ENTER)


def scroll_to_bottom(driver):
	SCROLL_PAUSE_TIME = 0.75

	# Get scroll height
	last_height = driver.execute_script("return document.body.scrollHeight")

	while True:
		# Scroll down to bottom
		driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

		# Wait to load page
		time.sleep(SCROLL_PAUSE_TIME)

		# Calculate new scroll height and compare with last scroll height
		new_height = driver.execute_script("return document.body.scrollHeight")
		if new_height == last_height:
			break
		last_height = new_height


def scrape_members(driver, pod_name, pod_id):
	# Navigate to POD page
	driver.get(f"https://social.vmware.com/spaces/{pod_id}/members")

	# Scrape members from people grid
	section = WebDriverWait(driver, 20).until(
		EC.presence_of_element_located((By.CLASS_NAME, "people-grid"))
	)
	scroll_to_bottom(driver)
	section = driver.find_element_by_class_name("people-grid")
	members = section.find_elements_by_tag_name("a")

	# Write all scraped members to output txt file
	print(f"Printing members for {pod_name}")
	member_count = 0
	with open(str(f"pod-data/{pod_name}.txt"), "w") as outfile:
		outfile.write("Name\tTitle\tDepartment\tLocation\n")
		for member in members:
			info = member.text.splitlines()
			info = "\t".join(info) # tab-separated info
			outfile.write(f"{info}\n")
			member_count += 1
	print(f"Scraped {member_count} members from {pod_name}.")


def read_pods(infile_name):
	with open(infile_name,'r') as infile:
		pods = infile.read().splitlines()
		return [pod.split(" ") for pod in pods]


########## MAIN ##########
def main():
	# Init chromedriver session
	driver = webdriver.Chrome(ChromeDriverManager().install())
	login_to_rsa(driver, USERNAME, PASSWORD)

	# Scrape members for each pod in given list
	pods = read_pods("pod-ids.txt")
	for pod_name, pod_id in pods:
		scrape_members(driver, pod_name, pod_id)

	driver.close()

if __name__ == "__main__": main()
