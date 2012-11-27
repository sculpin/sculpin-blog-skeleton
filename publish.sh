#!/bin/bash

vendor/bin/sculpin generate --env=prod
vendor/bin/sculpin assets:install --env=prod output_prod
rsync -avze 'ssh -p 4668' output_prod/ username@yoursculpinsite:public_html
