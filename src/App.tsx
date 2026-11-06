import { ArrowRight, ArrowUpRight, Bookmark, Check, Clock3, Leaf, Menu, Share2, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

const articleSections = [
  { id: 'origen', label: 'Un arte de observar' },
  { id: 'chi', label: 'El movimiento del chi' },
  { id: 'cinco-elementos', label: 'Los cinco elementos' },
  { id: 'casa', label: 'Empezar por casa' },
]

function App() {
  const [saved, setSaved] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareArticle = async () => {
    if (navigator.share) {
      await navigator.share({ title: 'Feng Shui: el arte de habitar en armonía', text: 'Una introducción serena al Feng Shui y a la relación entre nuestros espacios y nuestra vida cotidiana.' })
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f2eb] text-[#26352c]">
      <div className="border-b border-[#26352c]/10 bg-[#26352c] px-5 py-2 text-center text-[10px] font-semibold uppercase tracking-[.24em] text-[#e8e8d9]">
        Un espacio para las ideas que hacen bien
      </div>

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="shon, inicio">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8c9b80]/60 text-[#64785f]"><Leaf size={19} strokeWidth={1.5} /></span>
          <span>
            <span className="font-editorial block text-[25px] leading-none tracking-tight">shon<span className="text-[#9a6f50]">.</span></span>
            <span className="mt-1 block text-[8px] uppercase tracking-[.25em] text-[#7e857a]">Ideas para habitar mejor</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[.16em] text-[#657065] md:flex">
          <a className="transition hover:text-[#9a6f50]" href="#articulo">Artículos</a>
          <a className="transition hover:text-[#9a6f50]" href="#filosofia">Filosofía</a>
          <a className="transition hover:text-[#9a6f50]" href="#newsletter">Newsletter</a>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-[#26352c]/15 p-2.5 md:hidden" aria-label="Abrir menú">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <a href="#articulo" className="hidden items-center gap-2 rounded-full bg-[#34483a] px-5 py-3 text-[10px] font-semibold uppercase tracking-[.14em] text-white transition hover:bg-[#53684f] md:flex">
          Leer artículo <ArrowUpRight size={14} />
        </a>
      </header>

      {menuOpen && (
        <nav className="absolute left-0 right-0 top-[115px] z-30 flex flex-col gap-4 border-y border-[#26352c]/10 bg-[#f5f2eb] px-7 py-6 text-xs uppercase tracking-widest shadow-lg md:hidden">
          <a href="#articulo" onClick={() => setMenuOpen(false)}>Artículos</a>
          <a href="#filosofia" onClick={() => setMenuOpen(false)}>Filosofía</a>
          <a href="#newsletter" onClick={() => setMenuOpen(false)}>Newsletter</a>
        </nav>
      )}

      <main id="inicio">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-10 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-16 md:px-10 md:pb-24 md:pt-16">
          <div className="order-2 md:order-1">
            <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] text-[#8b765f]">
              <span className="h-px w-8 bg-[#a98a6b]" /> Espacios & bienestar
            </div>
            <p className="mb-5 text-xs uppercase tracking-[.18em] text-[#899084]">Una invitación a mirar distinto</p>
            <h1 className="font-editorial max-w-xl text-[clamp(3.1rem,6.3vw,5.7rem)] leading-[1.04] tracking-[-.045em] text-[#29392f]">
              El arte de<br /><em className="font-normal text-[#9a765a]">habitar</em> en<br />armonía.
            </h1>
            <p className="mt-7 max-w-md text-[15px] leading-8 text-[#6e786d]">
              ¿Y si tu casa fuera algo más que el lugar donde vivís? Un recorrido por el Feng Shui y su antigua invitación a encontrar equilibrio en lo cotidiano.
            </p>
            <a href="#articulo" className="mt-9 inline-flex items-center gap-3 border-b border-[#8d9b83] pb-2 text-[11px] font-semibold uppercase tracking-[.16em] text-[#435641] transition hover:gap-5">
              Descubrir el artículo <ArrowRight size={15} />
            </a>
            <div className="mt-14 flex items-center gap-4 border-t border-[#26352c]/10 pt-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4e3d7] text-[#71816a]"><Sparkles size={16} /></div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#465448]">Primera lectura</p>
                <p className="mt-1 text-xs text-[#8b9186]">Una guía para empezar, sin fórmulas mágicas.</p>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full border border-[#b8bca8]/60 md:-right-7 md:-top-7 md:h-40 md:w-40" />
            <div className="relative aspect-[4/4.6] overflow-hidden bg-[#d9d7c9]">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85"
                alt="Interior sereno con materiales naturales, madera y luz cálida"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18251c]/35 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                <span className="h-px w-8 bg-white/70" />
                <span className="text-[9px] uppercase tracking-[.22em]">La belleza de lo esencial</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#e5e4d8] text-center md:-bottom-7 md:-left-7 md:h-32 md:w-32">
              <span className="font-editorial text-3xl italic text-[#687961]">01</span>
              <span className="mt-1 text-[8px] uppercase tracking-[.16em] text-[#7b8575]">Nuestro comienzo</span>
            </div>
          </div>
        </section>

        <section className="border-y border-[#26352c]/10 bg-[#eeece3]">
          <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-[#26352c]/10 px-5 py-6 md:px-10 md:py-8">
            <div className="px-3 text-center md:px-8"><p className="font-editorial text-xl italic text-[#66775f] md:text-2xl">Equilibrio</p><p className="mt-1 text-[8px] uppercase tracking-[.16em] text-[#92978b] md:text-[9px]">Entre fuerzas</p></div>
            <div className="px-3 text-center md:px-8"><p className="font-editorial text-xl italic text-[#66775f] md:text-2xl">Intención</p><p className="mt-1 text-[8px] uppercase tracking-[.16em] text-[#92978b] md:text-[9px]">En cada elección</p></div>
            <div className="px-3 text-center md:px-8"><p className="font-editorial text-xl italic text-[#66775f] md:text-2xl">Armonía</p><p className="mt-1 text-[8px] uppercase tracking-[.16em] text-[#92978b] md:text-[9px]">Con el entorno</p></div>
          </div>
        </section>

        <section id="articulo" className="mx-auto max-w-7xl scroll-mt-8 px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 md:grid-cols-[220px_minmax(0,700px)] md:justify-center md:gap-20">
            <aside className="md:sticky md:top-8 md:h-fit">
              <p className="mb-5 text-[9px] font-semibold uppercase tracking-[.22em] text-[#9a765a]">En este artículo</p>
              <div className="flex flex-wrap gap-2 md:flex-col md:gap-0">
                {articleSections.map((section, index) => (
                  <a key={section.id} href={`#${section.id}`} className="group flex items-center gap-3 border-b border-[#26352c]/10 py-3 text-[11px] text-[#7d877a] transition hover:text-[#435641]">
                    <span className="font-editorial text-sm italic text-[#a58a70]">0{index + 1}</span>{section.label}
                  </a>
                ))}
              </div>
              <div className="mt-9 hidden border-t border-[#26352c]/10 pt-6 md:block">
                <p className="text-[9px] uppercase tracking-[.18em] text-[#9a9c90]">Compartir lectura</p>
                <button onClick={shareArticle} className="mt-3 flex items-center gap-2 text-xs text-[#66775f] hover:text-[#9a765a]">
                  {copied ? <Check size={14} /> : <Share2 size={14} />} {copied ? 'Enlace copiado' : 'Compartir'}
                </button>
              </div>
            </aside>

            <article>
              <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] font-semibold uppercase tracking-[.17em] text-[#9a765a]">
                <span>Feng Shui</span><span className="h-1 w-1 rounded-full bg-[#b7aa98]" /><span>6 de noviembre, 2026</span><span className="h-1 w-1 rounded-full bg-[#b7aa98]" /><span className="inline-flex items-center gap-1.5"><Clock3 size={12} /> 6 min de lectura</span>
              </div>
              <h2 className="font-editorial text-[clamp(2.5rem,5vw,4.1rem)] leading-[1.12] tracking-[-.035em] text-[#29392f]">Feng Shui: el arte de habitar en armonía</h2>
              <p className="mt-7 max-w-2xl font-editorial text-xl leading-[1.65] text-[#7c8878] md:text-[1.4rem]">
                Hay espacios que nos invitan a quedarnos y otros de los que queremos salir enseguida. El Feng Shui propone prestar atención a esa relación silenciosa entre el entorno y nuestra manera de sentir.
              </p>

              <div className="my-10 aspect-[16/8] overflow-hidden bg-[#dedbce]">
                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85" alt="Sala luminosa con plantas, madera y tonos naturales" className="h-full w-full object-cover" />
              </div>

              <div className="article-copy">
                <p>La casa no es un escenario neutral. La luz que entra por la ventana, el recorrido que hacemos al levantarnos, los objetos que acumulamos y hasta el rincón en el que elegimos descansar participan, de alguna manera, de nuestra experiencia cotidiana. Hace miles de años, en China, surgió una tradición que convirtió esa observación en una práctica: el <strong>Feng Shui</strong>.</p>

                <h2 id="origen">Un arte de observar el entorno</h2>
                <p>Feng Shui puede traducirse como «viento y agua», dos fuerzas de la naturaleza asociadas al movimiento y a la transformación. Sus raíces se encuentran en antiguas formas de observar el paisaje, la orientación, el clima y la relación entre los seres humanos y el territorio.</p>
                <p>Con el tiempo, estas ideas se aplicaron también a los espacios habitados. La propuesta central no consiste en decorar siguiendo una moda, sino en pensar cómo se organiza un lugar: dónde se ubican las entradas, cómo circula el aire, qué zonas reciben luz y qué sensaciones produce cada ambiente.</p>

                <blockquote>Un espacio armónico no es necesariamente perfecto: es un espacio que acompaña la vida que sucede en él.</blockquote>

                <h2 id="chi">El movimiento del chi</h2>
                <p>Uno de los conceptos centrales del Feng Shui es el <strong>chi</strong> (también escrito qi), entendido dentro de la tradición china como la energía o fuerza vital que atraviesa todas las cosas. En el diseño de interiores, suele utilizarse para hablar de la circulación y la vitalidad de un ambiente.</p>
                <p>Desde esta mirada, un pasillo bloqueado, una entrada saturada o una habitación sin ventilación representan obstáculos para un flujo equilibrado. No hace falta tomar esta idea como una ley física para encontrarle valor práctico: despejar los recorridos, cuidar la iluminación y permitir que el aire circule son decisiones que pueden hacer que una casa resulte más cómoda y agradable.</p>

                <h2 id="cinco-elementos">Los cinco elementos: una conversación entre fuerzas</h2>
                <p>El Feng Shui tradicional trabaja con cinco fases o elementos: <strong>madera, fuego, tierra, metal y agua</strong>. No son solamente materiales decorativos; representan cualidades y ciclos de transformación que se relacionan entre sí.</p>
                <p>La madera evoca crecimiento y flexibilidad; el fuego, energía y expansión; la tierra, estabilidad y cuidado; el metal, claridad y estructura; y el agua, fluidez y profundidad. En una interpretación contemporánea, estas asociaciones pueden inspirar una paleta de colores, la elección de texturas o la búsqueda de contrastes más equilibrados.</p>
                <p>La clave está en evitar las recetas rígidas. No se trata de llenar la casa de objetos de cada elemento, sino de observar si un ambiente se siente demasiado frío, recargado, rígido o inquieto, y hacer pequeños ajustes que respondan a sus necesidades.</p>

                <div className="my-10 grid grid-cols-5 gap-2">
                  {[
                    ['Madera', 'bg-[#7d8d6b]', 'Crecimiento'],
                    ['Fuego', 'bg-[#b9785e]', 'Energía'],
                    ['Tierra', 'bg-[#c6ad83]', 'Estabilidad'],
                    ['Metal', 'bg-[#b8b9ad]', 'Claridad'],
                    ['Agua', 'bg-[#667d83]', 'Fluidez'],
                  ].map(([name, color, quality]) => (
                    <div key={name} className="text-center">
                      <div className={`mb-2 aspect-square rounded-full ${color}`} />
                      <p className="text-[10px] font-semibold text-[#455447]">{name}</p>
                      <p className="mt-1 hidden text-[9px] text-[#92978b] sm:block">{quality}</p>
                    </div>
                  ))}
                </div>

                <h2 id="casa">Empezar por casa: cuatro gestos sencillos</h2>
                <p>No necesitás reformar tu hogar ni comprar objetos especiales para acercarte a esta filosofía. Podés empezar con una observación atenta y algunos cambios simples:</p>
                <p><strong>1. Despejá la entrada.</strong> Es el primer contacto con tu casa. Procurá que sea luminosa, funcional y que permita entrar sin obstáculos.</p>
                <p><strong>2. Recuperá el espacio.</strong> Revisá qué objetos ya no cumplen una función o no tienen un lugar. Ordenar no es esconder: es decidir conscientemente qué querés conservar.</p>
                <p><strong>3. Prestá atención a la luz y al aire.</strong> Aprovechá la luz natural, ventilá los ambientes y sumá iluminación cálida donde necesitás bajar el ritmo.</p>
                <p><strong>4. Creá un rincón para vos.</strong> Puede ser una silla junto a una ventana, una mesa despejada o un pequeño espacio de lectura. Lo importante es que tenga un propósito y te invite a estar presente.</p>

                <h2>Más que una decoración, una forma de mirar</h2>
                <p>Conviene recordar que el Feng Shui es una tradición filosófica y cultural, no un método científico demostrado para atraer prosperidad, curar enfermedades o garantizar resultados. Su valor puede estar, para muchas personas, en ofrecer un lenguaje para pensar la relación con el espacio y convertir esa reflexión en hábitos concretos.</p>
                <p>Quizás ese sea un buen punto de partida: dejar de mirar la casa como una suma de habitaciones y empezar a verla como un entorno que podemos cuidar. No para alcanzar una armonía ideal, sino para construir, de a poco, un lugar que se parezca más a la vida que queremos vivir.</p>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-y border-[#26352c]/10 py-6">
                <div><p className="text-[9px] uppercase tracking-[.18em] text-[#9a765a]">Una pausa para reflexionar</p><p className="mt-1 font-editorial text-lg italic text-[#596b55]">¿Qué cambiarías hoy en tu espacio?</p></div>
                <div className="flex gap-2">
                  <button onClick={() => setSaved(!saved)} className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider transition ${saved ? 'border-[#71816a] bg-[#e3e8dd] text-[#435641]' : 'border-[#26352c]/15 text-[#687568] hover:border-[#71816a]'}`}>
                    {saved ? <Check size={13} /> : <Bookmark size={13} />} {saved ? 'Guardado' : 'Guardar'}
                  </button>
                  <button onClick={shareArticle} className="flex items-center gap-2 rounded-full border border-[#26352c]/15 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-[#687568] transition hover:border-[#71816a]">
                    {copied ? <Check size={13} /> : <Share2 size={13} />} {copied ? 'Copiado' : 'Compartir'}
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="filosofia" className="bg-[#34483a] px-6 py-20 text-[#f1efe7] md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <div>
              <p className="mb-5 text-[9px] uppercase tracking-[.25em] text-[#c5b69e]">La filosofía de shon</p>
              <h2 className="font-editorial text-4xl leading-tight tracking-tight md:text-5xl">Menos ruido.<br /><em className="font-normal text-[#c5b69e]">Más sentido.</em></h2>
            </div>
            <div className="max-w-xl md:justify-self-end">
              <p className="text-sm leading-8 text-[#d0d6cb]/80">Creemos que las ideas más interesantes no siempre piden respuestas rápidas. Este espacio nace para explorar cómo vivimos, qué nos rodea y qué pequeñas decisiones pueden transformar nuestra experiencia cotidiana.</p>
              <a href="#inicio" className="mt-7 inline-flex items-center gap-3 border-b border-[#c5b69e]/60 pb-2 text-[10px] uppercase tracking-[.18em] text-[#e5dfd0] hover:gap-5">Volver al comienzo <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>

        <section id="newsletter" className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10 md:py-24">
          <div className="mx-auto max-w-xl">
            <span className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#e7e8dd] text-[#71816a]"><Leaf size={20} /></span>
            <p className="text-[9px] font-semibold uppercase tracking-[.24em] text-[#9a765a]">Sigamos explorando</p>
            <h2 className="mt-4 font-editorial text-3xl leading-tight text-[#29392f] md:text-4xl">Las buenas ideas merecen espacio.</h2>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#818a7d]">Un lugar para volver cuando necesites inspiración para vivir y habitar mejor.</p>
            <a href="#inicio" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#34483a] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[.16em] text-white transition hover:bg-[#53684f]">Seguir leyendo <ArrowUpRight size={14} /></a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#26352c]/10 px-6 py-7 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <span className="font-editorial text-xl tracking-tight">shon<span className="text-[#9a765a]">.</span></span>
          <p className="text-[9px] uppercase tracking-[.16em] text-[#9a9d91]">Ideas para habitar mejor · 2026</p>
          <a href="#inicio" className="flex items-center gap-2 text-[9px] uppercase tracking-[.16em] text-[#71816a] hover:text-[#9a765a]">Volver arriba <ArrowUpRight size={12} /></a>
        </div>
      </footer>
    </div>
  )
}

export default App