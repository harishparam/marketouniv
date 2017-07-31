from app import app
from flask import render_template, flash, request, redirect, g, abort, make_response, send_from_directory

import os

app_dir = os.path.abspath(os.path.dirname(__file__))

########################################################
#
#				Base Template and Index
#					
########################################################

pages = [
  'base',
  'cleanbase',
  'custombase',
  'base-simple',
  'student1',
  'student2',
  'student3',
  'student4',
  'student5',
  'student6',
  'student7',
  'index',
  'index_rce',
  'persona_cio',
  'verticals',
  'student8',
  'student9',
  'student10',
  'predictive-content',
  'predictive-content-106',
  'predictive-content-106d',
  'channel_engagement',
  'blog-page'
]

@app.route('/')
def no_language():
	return redirect('/index')

@app.route('/facebook')
def facebook():
 	return send_from_directory(os.path.join(app_dir, 'templates'), 'facebook.html')

@app.route('/economist')
def economist():
 	return send_from_directory(os.path.join(app_dir, 'templates'), 'economist.html')

@app.route('/js/<path:file_name>')
def serve_js(file_name):
	return send_from_directory(os.path.join(app_dir, 'static', 'js'), file_name)

@app.route('/img/<path:file_name>')
def serve_images(file_name):
	return send_from_directory(os.path.join(app_dir, 'static', 'img'), file_name)

@app.route('/css/<path:file_name>')
def serve_css(file_name):
	return send_from_directory(os.path.join(app_dir, 'static', 'css'), file_name)

@app.route('/font/<path:file_name>')
def serve_fonts(file_name):
	return send_from_directory(os.path.join(app_dir, 'static', 'font'), file_name)

@app.route('/images/<path:file_name>')
def serve_images_old(file_name):
	return send_from_directory(os.path.join(app_dir, 'static', 'img'), file_name)

@app.route('/font-awesome/<path:file_name>')
def serve_font_awesome(file_name):
	return send_from_directory(os.path.join(app_dir, 'static', 'font-awesome'), file_name)

@app.route('/favicon.ico')
def favicon():
	return send_from_directory(os.path.join(app_dir, 'static', 'img'), 'favicon.ico')

@app.route('/<page>')
def main_route(page):
	if page in pages:
		return render_template(page + '.html')

# Custom Demo Account
@app.route('/mktodemoaccount317')
def serve_custom317():
	return send_from_directory(os.path.join(app_dir, 'templates', 'custompages'), 'mktodemoaccount317.html')

@app.route('/mktodemoaccount201')
def serve_custom201():
	return send_from_directory(os.path.join(app_dir, 'templates', 'custompages'), 'mktodemoaccount201.html')

@app.route('/predictive-assets/<asset>')
def predictive_asset(asset):
  return render_template('predictive-assets.html', content=asset)

@app.route('/predictive-assets-106/<asset>')
def predictive_asset_106(asset):
  return render_template('predictive-assets-106.html', content=asset)

@app.route('/predictive-assets-106d/<asset>')
def predictive_asset_106d(asset):
  return render_template('predictive-assets-106d.html', content=asset) 
