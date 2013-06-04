#!/bin/bash

vendor/bin/sculpin generate --env=prod || ( echo "Could not generate the site" && exit )
rsync -avze 'ssh -p 4668' output_prod/ username@yoursculpinsite:public_html || ( echo "Could not publish the site" && exit )
