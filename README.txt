TeLoAdivino v4.2 - Salas Online funcionales con Firebase

Incluye:
- Adivina mi número
- Adivina mi cumpleaños
- Compatibilidad mágica local
- Descubre tu vibra local
- Salas online con Firebase Realtime Database
- Crear sala
- Unirse por código o QR
- Lobby con participantes sincronizados en tiempo real
- Botón Iniciar juego para el anfitrión
- Compatibilidad mágica online: cada persona responde desde su celular
- Resultado online automático cuando todos terminan

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


TeLoAdivino v4.3: corrige sincronización del resultado online para que todos los participantes vean el resultado. El resultado se publica en Firebase en game/result y todos los celulares lo renderizan desde la misma fuente.
