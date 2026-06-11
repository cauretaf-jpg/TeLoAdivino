TeLoAdivino v4.1 - Salas Online con Firebase

Incluye:
- Adivina mi número
- Adivina mi cumpleaños
- Compatibilidad mágica
- Descubre tu vibra
- Salas online con Firebase Realtime Database
- Crear sala
- Unirse por código
- Link de invitación
- QR de invitación
- Participantes sincronizados en tiempo real

Archivos útiles:
- Probar_TeLoAdivino.bat: abre la app localmente para revisar cambios.
- Subir_TeLoAdivino.bat: sube los cambios a GitHub.

Firebase usado:
- Proyecto: teloadivino-205e1
- Realtime Database: https://teloadivino-205e1-default-rtdb.firebaseio.com

Reglas beta recomendadas para probar:
{
  "rules": {
    "rooms": {
      "$roomId": {
        ".read": true,
        ".write": true
      }
    }
  }
}

Nota:
Estas reglas son para beta. Más adelante conviene endurecer seguridad, expiración de salas y limpieza automática.
