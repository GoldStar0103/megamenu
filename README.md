# Mega menu preview

Demo del megamenú con el **mapa real del sitio** y el diseño visual de [Lucid](https://lucid.co/es/soluciones): logo, paleta `#282c33` / `#005ed0`, header de 60px, botones cuadrados, hero con foto y onda, y tarjetas con enlaces azules. Graphik no es embebible; se usa Plus Jakarta Sans como fallback. Iconos Lucide (MIT). Sin descripciones cortas.

Abrir `index.html` en el navegador. En escritorio, pasar el cursor entre las secciones del nav. En tablet/móvil, usar el menú hamburguesa.

## Navegación

- **Solutions** — Real-Time Interpretation (OPI, VRI, On-Site + Use Cases), Infrastructure / LaaS, Schedule interpretation
- **Industries** — Healthcare, Legal, Enterprise, Government, Education (Risks, Use Cases, Outcomes)
- **Platform** — How it works: Connect, Match, Interpret, Continuous Optimization, Integrations, Availability & SLA, Security & Compliance
- **People** — Interpreter Selection, Evaluation System, Training & Quality Control, Human + Technology Model, Career
- **Insights** — Thought Leadership, Industry Content, Communication Failures & Impact
- **About** — Mission, Story, Values, Credibility + Find the right solution
- **Get Pricing** — CTA (Contact / formulario)

## Construcción

- Prefijo de clases `mm_` para migrar a otro template.
- Variables CSS en `.mm_nav` para paleta, tipografía y animación (200 ms).
- Hover: el contenedor del icono se ilumina. Entrada: fade + desplazamiento.
- Responsive: acordeón en ≤1024px.
