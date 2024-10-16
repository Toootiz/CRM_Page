ENV_FILE=".env"

MONGO_URI="mongodb://localhost:27017/SandersDB"
PORT="5001"
JWT_SECRET="my_super_secret_key_tcb2007b"
CORREO="ejemplo@text.com"
PASS="1234 1234 1234 1234"

echo "Creando archivo $ENV_FILE en el directorio actual..."

echo "MONGO_URI=$MONGO_URI" > $ENV_FILE
echo "PORT=$PORT" >> $ENV_FILE
echo "JWT_SECRET=$JWT_SECRET" >> $ENV_FILE
echo "CORREO=\"$CORREO\"" >> $ENV_FILE
echo "PASS=\"$PASS\"" >> $ENV_FILE

echo "Archivo $ENV_FILE creado con éxito."
