TeLoAdivino v4.5 - Salas online más robustas

Cambios principales:
- Lobby con estado visible: Lobby, Jugando o Finalizada.
- Anfitrión visible en la sala.
- Botón Abandonar sala.
- Si abandona el anfitrión, se cierra la sala para todos.
- Botón Finalizar partida, solo para anfitrión.
- Botón Volver a lobby, solo para anfitrión durante una partida.
- Participantes muestran estado aproximado: en línea / sin actividad.
- Heartbeat de participantes cada 20 segundos.
- Salas con expiración lógica de 24 horas.
- Archivo firebase-rules-v4.5.json con reglas más restrictivas que las de prueba.

Importante:
Estas reglas siguen siendo una beta sin autenticación formal. Mejoran validación de estructura y reducen escrituras accidentales, pero no reemplazan Firebase Auth. Para una versión pública masiva, el siguiente paso recomendado es usar Firebase Anonymous Auth y reglas por auth.uid.

Cómo probar:
1. Descomprime el ZIP.
2. Ejecuta Probar_TeLoAdivino.bat.
3. Crea una sala.
4. Abre el QR/link desde otro celular.
5. Únete con nombres distintos.
6. Inicia Compatibilidad o La Botellita.
7. Prueba Volver a lobby, Finalizar y Abandonar sala.

Cómo subir:
1. Copia/reemplaza los archivos en C:\Users\caure\Desktop\Paginas\TeLoAdivino
2. Ejecuta Subir_TeLoAdivino.bat

Reglas Firebase:
Cuando la app funcione bien, puedes reemplazar tus reglas actuales por el contenido de firebase-rules-v4.5.json en Firebase > Realtime Database > Reglas > Publicar.
