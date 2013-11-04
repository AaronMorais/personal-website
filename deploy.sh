#!/usr/bin/env bash
ssh aaron << EOF
cd personal-website
git pull
forever restart
exit
EOF
