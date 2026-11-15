# Prompt: de la especificación a la arquitectura

Curso de Fundamentos de Agentes con IA · Clase 16 · Alejandro Uribe López

**Cómo usarlo:** abre Claude, adjunta la especificación de una página de tu agente (por ejemplo, la del agente de reclamos de Tienda Andina de la clase 15) y pega el texto de abajo. Si tu agente no es el de Tienda Andina, cambia solo lo que está entre corchetes.

---

Actúa como arquitecto de soluciones de IA.

Te adjunto la especificación de una página de un agente: [el agente de reclamos de Tienda Andina].

Conviértela en un documento de arquitectura técnica para construir un prototipo en Google Colab, en Python, usando la API de Claude con uso de herramientas (tool use). El documento debe tener exactamente estas siete secciones:

1. **Resumen del agente**, en tres líneas.
2. **Modelo y bucle**: qué modelo de Claude se usa, cómo funciona el ciclo de decidir, ejecutar y observar, el tope de vueltas y qué pasa cuando se alcanza.
3. **Herramientas como funciones**: para cada herramienta de la especificación, su nombre, una descripción que diga cuándo usarla, sus parámetros de entrada con su tipo, lo que devuelve y su permiso (lectura, escritura o requiere aprobación humana).
4. **Datos simulados**: pedidos, envíos, clientes, historial y política, todos ficticios, suficientes para cubrir cada uno de los casos de prueba de la especificación.
5. **Controles en el código**: validación de argumentos (solo se aceptan números de pedido que hayan aparecido antes en la conversación o en un resultado), identidad del cliente puesta por el sistema y no por el modelo, propuestas de compensación que quedan en una cola de pendientes y nunca se ejecutan, detección de consultas repetidas y registro de cada llamada a herramienta.
6. **Casos de prueba**: cada caso de la especificación con el mensaje de prueba, las herramientas que el agente debería usar y el resultado esperado.
7. **Fuera de alcance del prototipo**.

Restricciones:

- No uses servicios externos ni bases de datos reales: todo vive dentro del notebook.
- No escribas código todavía; solo el documento.
- Usa los mismos nombres de funciones de la especificación, en español y en snake_case.
- Si algo de la especificación es ambiguo, señálalo en una nota al final en lugar de inventarlo.

Formato: Markdown.

---

## Lista para revisar el resultado

Antes de usar la arquitectura, verifica:

1. ¿Están todas las herramientas, cada una con lo que recibe y lo que devuelve?
2. ¿Las herramientas que mueven dinero dejan la propuesta pendiente, sin ejecutarla?
3. ¿Los datos simulados alcanzan para todos los casos de prueba?
4. ¿El tope de vueltas es el de la especificación y la identidad la pone el sistema?
5. ¿Respeta el fuera de alcance de la especificación?

Si algo no cumple, no lo corrijas a mano: pídele a Claude que lo ajuste, diciéndole exactamente qué parte de la especificación no se está cumpliendo.
