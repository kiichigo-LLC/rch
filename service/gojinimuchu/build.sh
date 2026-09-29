#!/bin/sh
cd "$(dirname "$0")"

php dev.php > index.html

echo "HTML変換が完了しました！"
