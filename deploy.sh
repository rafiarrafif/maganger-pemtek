echo "Building..."
npm run build

echo "Deploying files to server..."
scp -r -i ~/Downloads/personal-key.pem dist/* ubuntu@158.178.232.185:/var/www/pemtek25

echo "Done!"
