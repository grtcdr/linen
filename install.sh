#!/bin/sh

mkdir -p ~/.local/share/color-schemes
cp Linen.colors ~/.local/share/color-schemes

if [ $? -eq 0 ]
then
	echo "Linen was successfully installed on your system."
	echo "You may apply it by changing your colorscheme in System Settings > Appearance > Colors"
fi
