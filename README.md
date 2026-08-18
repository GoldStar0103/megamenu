# Mega menu preview

Demo del megamenú con el **mapa real del sitio** y el patrón visual de [Lucid](https://lucid.co/es/soluciones). Iconos Lucide (MIT). Sin descripciones cortas.

Abrir `index.html` en el navegador. En escritorio, pasar el cursor entre las secciones del nav. En tablet/móvil, usar el menú hamburguesa.

## Navegación

- **Solutions** — Real-Time Interpretation (OPI, VRI, On-Site + Use Cases), Schedule interpretation, Infrastructure / LaaS
- **Industries** — Healthcare, Legal, Enterprise, Government, Education (Risks, Use Cases, Outcomes)
- **Platform** — How it works: Connect, Match, Interpret, Continuous Optimization, Integrations, Availability & SLA, Security & Compliance
- **People** — Interpreter Selection, Evaluation System, Training & Quality Control, Human + Technology Model, Career
- **Insights** — Thought Leadership, Industry Content, Communication Failures & Impact
- **About** — Mission, Story, Values, Credibility
- **Contact** — Find the right solution, Get Pricing, Form, Career
- **Get Pricing** — CTA

## Construcción

- Prefijo de clases `mm_` para migrar a otro template.
- Variables CSS en `.mm_nav` para paleta, tipografía y animación (200 ms).
- Hover: el contenedor del icono se ilumina. Entrada: fade + desplazamiento.
- Responsive: acordeón bajo cada ítem en ≤1100px.
- Cada panel vive dentro de su grupo del nav, para que el acordeón móvil y el hover de escritorio usen la misma estructura.
