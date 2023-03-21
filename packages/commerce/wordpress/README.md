1. Go to https://hub.docker.com/_/wordpress go to the latest wordpress version.
2. Download the three files from that sub directory (you can using `download-directory.github.io`) and then replace the files in this directory said the downloaded files.
3. make the shell script executable by running `chmod +x docker-entrypoint.sh`
4. Add pdo php extension for mails to work properly ![alt text](../docs/php_extesions_pdo_mail.png)
5. run docker compose.
