# Prompt: del documento de arquitectura a n8n

Curso de Fundamentos de Agentes con IA · Clase 18 · Alejandro Uribe López

**Cómo usarlo:** abre Claude, adjunta el documento de arquitectura (por ejemplo, la arquitectura del agente de reclamos de Tienda Andina de la clase 16) y pega el texto de abajo. Claude te devolverá el plano de nodos y la configuración de cada uno; con eso armas el flujo en n8n o revisas el flujo de ejemplo de la clase.

---

Actúa como experto en n8n. Te adjunto el documento de arquitectura de un agente.

Quiero construirlo como un flujo de n8n, sin escribir código salvo dentro de los nodos de código. Entrégame:

1. **Un diagrama del flujo** (en formato Mermaid) con todos los nodos y sus conexiones.
2. **Una tabla de nodos** con: nombre, tipo de nodo de n8n, para qué sirve y cómo se conecta.
3. **La configuración de cada nodo**, paso a paso, como para alguien que nunca ha usado n8n. Incluye:
   - El nodo de disparo (por ejemplo, el chat).
   - Un clasificador con IA que envíe cada mensaje a su escalón: las solicitudes que se resuelven con reglas fijas a una automatización, las que solo necesitan entender el texto a una ruta fija, y solo las que lo justifican al nodo AI Agent.
   - El nodo AI Agent con su System Message (las instrucciones de la arquitectura) y Max Iterations igual al tope de vueltas.
   - El modelo de chat de Anthropic, la memoria y cada herramienta como un nodo de código (Code Tool) con su nombre, descripción, esquema de entrada y código.
4. **Los controles que van dentro del código de cada herramienta**: la identidad del cliente la pone el sistema, ningún pedido de otro cliente se devuelve y las compensaciones solo quedan pendientes.
5. **Qué cambia frente al prototipo en Colab** y qué haría falta para llevarlo a producción.

Usa los mismos nombres de herramientas de la arquitectura. Si un nodo o una opción puede llamarse distinto según la versión de n8n, dilo.

---

## Si algo falla al importar el flujo de ejemplo

- **Un nodo aparece con advertencia:** ábrelo y vuelve a seleccionar sus opciones; si persiste, créalo de nuevo con la misma configuración. Los nombres y versiones de los nodos pueden cambiar entre versiones de n8n.
- **Error de credenciales:** crea tu credencial de Anthropic y selecciónala en los dos nodos de modelo.
- **Error con el modelo:** elige un modelo vigente de la lista del nodo.
