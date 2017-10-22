#!/bin/bash
c=0
while [ $c -le 55 ]
do
	nightwatch tests/large.js;
	(( c++ ))
done
exit 0
