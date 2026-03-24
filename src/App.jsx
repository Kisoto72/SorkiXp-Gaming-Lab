import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import clickSound from './assets/resident-evil-2-inventario.wav';
import platino1 from './assets/platino1.jpg';
import platino2 from './assets/platino2.jpeg';
import platino3 from './assets/platino3.jpg';
import platino4 from './assets/platino4.jpg';
import platino5 from './assets/platino5.jpeg';
import platino6 from './assets/platino6.jpg';
import platino7 from './assets/platino7.jpg';
import platino8 from './assets/platino8.jpg';
import fama1 from './assets/fama1.jpeg';
import fama2 from './assets/fama2.jpg';
import fama3 from './assets/fama3.jpg';
import archivo1 from './assets/archivo1.jpg';
import archivo2 from './assets/archivo2.jpg';
import archivo3 from './assets/archivo3.jpg';
import archivo4 from './assets/archivo4.jpg';
import archivo5 from './assets/archivo5.jpg';
import archivo6 from './assets/archivo6.jpg';
import platino from './assets/platino.png';
const Home = () => <div className='ventana-inicio'> <h2 className='info'>Este es el inicio de mi pagina, en este intento de pagina web hablare sobre mis juegos platinados y los que platinare en un futuro, sobre los juegos que he jugado, los que abandone y porque. Y sobre futuros proyectos que tenga en mente.</h2> </div>;
const PlatinosPage = () => (<> <div className='ventana-platino'> <h2 className='info'>Aquí hablo de los platinos que he conseguido</h2></div>
  <div className='platino1'>
    <h2 className='resident'>
      Resident Evil 2 Remake
    </h2>
    <img className='img-plantino1' src={platino1} alt="PlatinoResidentEvil2" />
    <p className='platino1-info'>
      El primer platino que hablare sera de resident evil 2 remake... Este es el platino más reciente que obtuve en mi cuenta de PlayStation4.
    </p>
    <br />
    <table className='tabla-platino'>
      <tbody>
        <tr>
          <td className='datos-platino1'>🎮 Dificultad:</td>
          <td className='datos-platino2'>4/10</td>
        </tr>
        <tr>
          <td className='datos-platino1'>⏳ Duracion:</td>
          <td className='datos-platino2'>40 hrs</td>
        </tr>
        <tr>
          <td className='datos-platino1'>🕹️ plataforma:</td>
          <td className='datos-platino2'>PS4</td>
        </tr>
      </tbody>
    </table>
    <div className='momento-complicado'>
      <h4>💀 Momento Complicado:</h4>
      <p className='text-moment'>La parte final del laboratorio en la run de Claire... cuando enfrentas a la fase 3 y 4 de Birkin, la veces que mori con la fase 3... para llegar sin balas a las fase 4.... Lo bueno, es que por esos "errores" pude optener el <strong>rango S</strong> en dificil con 5 segundos para llegar a las 2 horas.</p>
    </div>
    <p className='platino1-info'>
      Honestamente este platino no tenia en mente sacarlo, solo iba a jugar las partidas necesarias para disfrutar del mismo... pero el juego me gusto mucho que le saque su platino sin querer. Al principio fui solo por los trofeos "Complete Vermin Extermination", "Lore Explorer" y "Master of Unlocking" trofeos que son sencillos de conseguir... y despues de ahi, pues la historia se cuenta sola. Despues de eso vinieron los demas logros de terminal el juego en dificl, terminar el juego sin curarse y sin abrir el abul... un platino que me encanto sacar.
    </p>
  </div>

  <div className='platino2'>
    <h2 className='AssassinsCreedII'>Assassin's Creed II</h2>
    <img className='img-platino2' src={platino2} alt="PlatinodeAssassin'sCreedII" />
    <p className='platino2-info'>El siguiente platino es de una leyenda: Assassin's Creed II. Es, sin duda, uno de mis juegos favoritos de toda la vida, en gran parte gracias a que nos dio al legendario Ezio Auditore.</p>
    <table className='tabla-platino'>
      <tbody>
        <tr>
          <td className='datos-platino1'>🎮 Dificultad:</td>
          <td className='datos-platino2'>2/10</td>
        </tr>
        <tr>
          <td className='datos-platino1'>⏳ Duracion:</td>
          <td className='datos-platino2'>100 hrs</td>
        </tr>
        <tr>
          <td className='datos-platino1'>🕹️ plataforma:</td>
          <td className='datos-platino2'>PS4</td>
        </tr>
      </tbody>
    </table>
    <div className='momento-complicado'>
      <h4>💀 Momento Complicado:</h4>
      <p className='text-moment'>Las jodidas 100 plumas... No dire nada más, quien haya platinado este juego... sabra la frustración que son esas plumas.</p>
    </div>
    <p className='platino2-info'>
      A diferencia del Resident Evil 2 Remake, este platino sí estaba en mi lista de deseos desde el día uno, ya que es uno de mis Assassin's Creed favoritos de la historia. Empecé a jugarlo en una <strong>Xbox 360</strong> por un amigo, pero cuando salió la <strong>colección de Ezio en ps4</strong> y vi que estaba en <strong>ps plus</strong>, decidí re-jugarlo una vez más y platinarlo. Mi plan original es platinar la trilogía completa, pero por ahora mi objetivo está pausado por falta de fondos para comprar el juego o pagar la suscripción...
    </p>
  </div>
  <div className='platino3'>
    <h2 className='milesmorales'>Marvel's Spider-Man: Miles Morales</h2>
    <img className='img-platino3' src={platino3} alt="Platino de Marvel Spiderman: Miles Morales" />
    <p className='platino3-info'>El tercer platino de la lista es el <strong>Marvel's Spider-Man: Miles Morales</strong>... Este platino si senti una obligación por haberme platino el primero que salio en <strong>ps4.</strong></p>
    <table className='tabla-platino'>
      <tbody>
        <tr>
          <td className='datos-platino1'>🎮 Dificultad:</td>
          <td className='datos-platino2'>2/10</td>
        </tr>
        <tr>
          <td className='datos-platino1'>⏳ Duracion:</td>
          <td className='datos-platino2'>60 hrs</td>
        </tr>
        <tr>
          <td className='datos-platino1'>🕹️ plataforma:</td>
          <td className='datos-platino2'>PS4</td>
        </tr>
      </tbody>
    </table>
    <div className='momento-complicado-miles'>
      <h4>💀 Momento Complicado:</h4>
      <p className='text-moment'>Al ser un mundo abierto no hay tanta dificultad como tal... pero lo unico "complicado" es volver a jugar otra <strong>partida+</strong>, y pasarte el juego una segunda vez...</p>
    </div>
    <p className='platino3-info'>La verdad es que el juego <strong>no me pareció la gran maravilla</strong> a comparación del título anterior, pero fue entretenido. No obstante, <strong>no me divertí tanto como para re-jugarlo una segunda vez</strong>. Debieron haber puesto ese trofeo por separado, como en el juego original.</p>
  </div>

  <div className='platino4'>
    <h2 className='spiderman'>Marvel's Spider-Man PS4</h2>
    <img className='img-platino4' src={platino4} alt="Platino de marvel spiderman ps4" />
    <p className='platino4-info'>El cuarto platino es el Marvel's Spider-Man PS4 y el ultimo (hasta el momento) de esta plataforma... y fue el primer platino que conseguí en mi vida.</p>
    <table className='tabla-platino'>
      <tbody>
        <tr>
          <td className='datos-platino1'>🎮 Dificultad:</td>
          <td className='datos-platino2'>2/10</td>
        </tr>
        <tr>
          <td className='datos-platino1'>⏳ Duracion:</td>
          <td className='datos-platino2'>60 hrs</td>
        </tr>
        <tr>
          <td className='datos-platino1'>🕹️ plataforma:</td>
          <td className='datos-platino2'>PS4</td>
        </tr>
      </tbody>
    </table>
    <div className='momento-complicado'>
      <h4>💀 Momento Complicado:</h4>
      <p className='text-moment'>No tengo algo complicado en este juego tampoco... pero el hecho de tener todos los <strong>distritos al 100%</strong> era fastidioso... más con los crimines, que era de suerte que te salieran. Y luego que ya completas, te salen a cada rato y ya ni los pelas.</p>
    </div>
    <p className='platino4-info'>Este fue el <strong>primer platino que conseguí en mi vida</strong>... compre el juego unos meses después de haber conseguido mi PS4, y me metí una viciada tanto que falte a trabajar una vez por completar uno de los distritos... pero le tengo mucho cariño por lo mismo. Y al ser de mundo abierto y puedes ajustar la dificultad no fue complicado conseguirlo... tengo pensado platinar el <strong>Marvel's Spider-Man 2</strong> pero eso sera cuando consiga la <strong>PS5</strong>... para ahora si tener platinado la trilogia de Spiderman.</p>
  </div>
  <div className='platino5'>
    <h2 className='outlast'>Outlast</h2>
    <img className='img-platino5' src={platino5} alt="PLatino de outlast en PC" />
    <p className='platino5-info'>El siguiente platino es en la plataforma de <strong>PC</strong>... para ser más especificos en la plataforma de steam. <strong>Outlast</strong> es una de mis videojuegos favoritos, y puedo decir que es <strong>mi videojuego favorito de terror</strong>... por mucho.</p>
    <table className='tabla-platino'>
      <tbody>
        <tr>
          <td className='datos-platino1'>🎮 Dificultad:</td>
          <td className='datos-platino2'>4/10</td>
        </tr>
        <tr>
          <td className='datos-platino1'>⏳ Duracion:</td>
          <td className='datos-platino2'>15 hrs</td>
        </tr>
        <tr>
          <td className='datos-platino1'>🕹️ plataforma:</td>
          <td className='datos-platino2'>PC</td>
        </tr>
      </tbody>
    </table>
    <div className='momento-complicado-outlast'>
      <h4>💀 Momento Complicado:</h4>
      <p className='text-moment'>Al conocerme el juego de pies a cabeza, completar el modo <strong>Demente</strong> no fue tan difícil como esperaba. Sin embargo, lo que realmente se vuelve <strong>tedioso</strong> es la búsqueda de todos los documentos y grabaciones; es un reto que más que habilidad, requiere una memoria impecable o mucha paciencia.</p>
    </div>
    <p className='platino5-info'><strong>Outlast al ser mi videojuego favorito de terror</strong>, me dieron ganas de completar todo al 100%... <strong>incluyendo el DLC</strong>. Hasta lo tengo en las distintas plataformas (PC, Xbox, PS4 y Nintendo Switch)... solo porque me da miedo, si no tambien platinaria el outlast 2, y tengo planes de platinar el Trials pero me falta gente para completar algunos desafios.</p>
  </div>
  <div className='platino6'>
    <h2 className='terroro'>Terroro</h2>
    <img className='img-platino6' src={platino6} alt="platino de terroro" />
    <p className='platino6-info'>Este lo saqué simplemente por las risas. Al hacerse viral 'Roro' y salir este juego de terror temático, decidí probarlo. Me dio tanta gracia la premisa que terminé platinándolo solo por el meme.</p>
    <table className='tabla-platino'>
      <tbody>
        <tr>
          <td className='datos-platino1'>🎮 Dificultad:</td>
          <td className='datos-platino2'>1/10</td>
        </tr>
        <tr>
          <td className='datos-platino1'>⏳ Duracion:</td>
          <td className='datos-platino2'>1:48 hrs</td>
        </tr>
        <tr>
          <td className='datos-platino1'>🕹️ plataforma:</td>
          <td className='datos-platino2'>PC</td>
        </tr>
      </tbody>
    </table>
    <div className='momento-complicado'>
      <h4>💀 Momento Complicado:</h4>
      <p className='text-moment'>Al ser un título indie tan básico, fue pan comido obtener todos los logros. Lo único ligeramente 'enredado' fueron un par de puzzles necesarios para ciertos trofeos, pero fuera de eso, es un platino regalado.</p>
    </div>
    <p className='platino6-info'>No tengo mucho que decir de este juego, es un juego meme sobre roro cuando estaba de moda... un juego interesante, corto y divertido de platinar.</p>
  </div>
  <div className='platino7'>
    <h2 className='redshift'>RedShift</h2>
    <img className='img-platino7' src={platino7} alt="Platino de RedShift" />
    <p className='platino7-info'>Un juego indie que conoci por tiktok... que me llamo la atención por la <strong>atmosfera</strong> y los <strong>graficos low poly</strong>.</p>
    <table className='tabla-platino'>
      <tbody>
        <tr>
          <td className='datos-platino1'>🎮 Dificultad:</td>
          <td className='datos-platino2'>1/10</td>
        </tr>
        <tr>
          <td className='datos-platino1'>⏳ Duracion:</td>
          <td className='datos-platino2'>40 min</td>
        </tr>
        <tr>
          <td className='datos-platino1'>🕹️ plataforma:</td>
          <td className='datos-platino2'>PC</td>
        </tr>
      </tbody>
    </table>
    <div className='momento-complicado'>
      <h4>💀 Momento Complicado:</h4>
      <p className='text-moment'>Al ser un juego corto, obtener todos los logros es bastante directo. El único obstáculo real podría ser la barrera del idioma; si no dominas el inglés, algunos objetivos pueden volverse confusos. Pero fuera de eso, es pan comido.</p>
    </div>
    <p className='platino7-info'>Este es el ultimo platino que puedo platicar... es un juego entretenido, un juego indie corto pero que vale mucho la pena. Y lo mejor, esta de forma <strong>gratuita en steam</strong>... recomendado si te gustan los juegos cortos y los <strong>graficos low poly</strong>.</p>
  </div>
  <div className='platino8'>
    <h2 className='fallen_order'>Star Wars Jedi Fallen Order</h2>
    <img className='img-platino8' src={platino8} alt="Platino de Star Wars Fallen Order" />
    <p className='platino8-info'>Este es de otros platinos que no tenia en mente platinar, pero al conseguir uno que otro logro salio solo al igual que el de Resident Evil 2 Remake</p>
    <table className='tabla-platino'>
      <tbody>
        <tr>
          <td className='datos-platino1'>🎮 Dificultad:</td>
          <td className='datos-platino2'>4/10</td>
        </tr>
        <tr>
          <td className='datos-platino1'>⏳ Duracion:</td>
          <td className='datos-platino2'>40 hrs</td>
        </tr>
        <tr>
          <td className='datos-platino1'>🕹️ plataforma:</td>
          <td className='datos-platino2'>PS4</td>
        </tr>
      </tbody>
    </table>
    <div className='momento-complicado'>
      <h4>💀 Momento Complicado:</h4>
      <p className='text-moment'>Aunque puedes elegir la dificultad, el juego no deja de ser un <strong>soulslike</strong>; es un constante ensayo y error.  Lo que nunca olvidaré son los logros <strong> 'A Galaxy Far, Far Away' </strong> y <strong> 'Data Disk' </strong>. Especialmente este último en <strong>Kashyyyk</strong>, donde el análisis del 'Shyyyo Bird' se me bugeó: por más que lo intentaba, no me dejaba analizarlo hasta que tuve que investigar en foros y meditar varias veces para que el juego reaccionara. Además, tener el <strong>100% de los mapas es un reto de paciencia</strong>; en Ilum me quedé al 99% por una zona minúscula que me obligó a dar vueltas por todo el planeta hasta encontrarla.</p>
    </div>
    <p className='platino8-info'>
      Al igual que con Resident Evil 2 Remake, este es <strong>otro platino que no tenía planeado</strong>, pero los logros fueron saliendo solos.
      Lo jugué originalmente en 2022, pero lo abandoné. Al regresar a PS4, tuve que empezar de cero porque había formateado la consola, pero fue lo mejor: <strong>me adapté al parry</strong>, mejoré mi esquive y logré sacar un platino que jamás pensé tener junto a los demás.</p>
  </div>
</>);
const JuegosPage = () => (<> <div className='ventana-juegos'> <h2 className='info'>Juegos que he jugado</h2></div>
  <div className='salon'> <p>Salón de la fama</p> </div>
  <div className='salon-fama-card'>
    <div className='fila-superior'>
      <h2 className='persona3'>Persona 3 Reload</h2>
      <img className='img-fama1' src={fama1} alt="Persona 3 Reload" />
      <table className='tabla-fama'>
        <tbody>
          <tr>
            <td className='datos-fama1'>Impacto personal:</td>
            <td className='datos-fama2'>10/10</td>
          </tr>
          <tr>
            <td className='datos-fama1'>Personaje favorito:</td>
            <td className='datos-fama2'>Makoto Yuki</td>
          </tr>
          <tr>
            <td className='datos-fama1'>Momento inolvidable:</td>
            <td className='datos-fama2'>La batalla final contra Nyx</td>
          </tr>
          <tr>
            <td className='datos-fama1'>Estado:</td>
            <td className='datos-fama2'>Completado</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className='text-fama'>Persona 3 Reload no es un juego más; es una obra que cambió mi perspectiva sobre los RPG por turnos y sobre la vida misma. Antes pensaba que este género era 'malo' o aburrido, hasta que llegó esta joya.
      <br />
      Me hizo apreciar más el tiempo y a la gente que me importa. En el juego podemos rebobinar, pero en la realidad cada decisión cuenta y es lo que nos define. No importa si sientes que empiezas solo esta aventura llamada vida; el juego te enseña que siempre hay personas con las que puedes conectar para enfrentar juntos las sombras. Si alguna vez juzgaste los RPG sin probarlos, piénsalo dos veces: a veces, lo que crees 'aburrido' puede cambiarte la vida.
    </p>
  </div>
  <div className='salon-fama-card'>
    <div className='fila-superior'>
      <h2 className='blackflag'>Assassin's Creed IV Black Flag</h2>
      <img className='img-fama2' src={fama2} alt="" />
      <table className='tabla-fama'>
        <tbody>
          <tr>
            <td className='datos-fama1-blackflag'>Impacto personal:</td>
            <td className='datos-fama2-blackflag'>10/10</td>
          </tr>
          <tr>
            <td className='datos-fama1-blackflag'>Personaje favorito:</td>
            <td className='datos-fama2-blackflag'>Edward Kendway</td>
          </tr>
          <tr>
            <td className='datos-fama1-blackflag'>Momento inolvidable:</td>
            <td className='datos-fama2-blackflag'>La redención de Edward</td>
          </tr>
          <tr>
            <td className='datos-fama1-blackflag'>Estado:</td>
            <td className='datos-fama2-blackflag'>Completado</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className='text-fama'>Assassin's Creed es una saga muy importante para mí; es mi favorita de videojuegos. Cuando salió Assassin's Creed IV: Black Flag no pude jugarlo en su momento. Lo probé gracias a un amigo en Xbox 360, pero solo fue un rato. Fue hasta que lo compré en PS4 cuando por fin pude disfrutarlo como se debía. Incluso quise sacarle el platino, pero no se pudo por el multijugador.
      <br />
      Sinceramente, no le veía el sentido a la cuarta entrega y mucho menos al personaje de Edward, pero cuando lo jugué, me di cuenta de por qué muchos lo tienen incluso por encima de Ezio Auditore. Todos hablan de la redención de Arthur Morgan, pero Edward Kenway nos enseña que, si tus errores no se atienden, pueden cobrar facturas muy altas... pero al mismo tiempo, puedes aprender de ellos y cambiar tanto por ti, como por la gente que amas.
    </p>
  </div>
  <div className='salon-fama-card'>
    <div className='fila-superior'>
      <h2 className='titanfall'>TitanFall 2</h2>
      <img className='img-fama3' src={fama3} alt="TitanFall 2" />
      <table className='tabla-fama'>
        <tbody>
          <tr>
            <td className='datos-fama1-titanfall'>Impacto personal:</td>
            <td className='datos-fama2-titanfall'>10/10</td>
          </tr>
          <tr>
            <td className='datos-fama1-titanfall'>Personaje favorito:</td>
            <td className='datos-fama2-titanfall'>BT</td>
          </tr>
          <tr>
            <td className='datos-fama1-titanfall'>Momento inolvidable:</td>
            <td className='datos-fama2-titanfall'>El sacrificio de BT</td>
          </tr>
          <tr>
            <td className='datos-fama1-titanfall'>Estado:</td>
            <td className='datos-fama2-titanfall'>Completado</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className='text-fama'>
      Titanfall 2 es un juego al que no le tenía mucha esperanza; pensé que sería un Call of Duty más futurista que Black Ops 3 o Infinite Warfare, pero me cerraron la boca con guante blanco.
      <br />
      No esperaba encariñarme tanto con un robot como BT. Pensé que sería el típico alivio cómico, pero la relación entre Jack, BT y el jugador se volvió inquebrantable. A veces los humanos somos egoístas y abandonamos a los demás por beneficio propio, pero BT demostró ser más humano que cualquiera: él protegió a Jack aun sabiendo que Jack se quedaría con él hasta el final. BT cumplió el Protocolo 3 hasta el último aliento.
    </p>
  </div>
  <div className='archivo'><p>Archivos De Partidas</p></div>
  <div className='archivos'>
    <div className='fila-archivo'>
      <img className='img-archivo-mediana' src={archivo1} alt="Dying Light" />
      <div className='contenido-archivo'>
        <h2>Dying Light</h2>
        <p className="stats-archivo">PC | 140 hrs | ⭐ 8/10</p>
        <p className="descripcion-corta">
          Sobrevivir en Harran fue una de las mejores experiencias de parkour que he tenido.
          La adrenalina de la noche no se compara con nada.
        </p>
      </div>
    </div>
  </div>
  <div className='archivos'>
    <div className='fila-archivo'>
      <img className='img-archivo-mediana' src={archivo2} alt="Slender The arrival" />
      <div className='contenido-archivo'>
        <h2>Slender The Arrival</h2>
        <p className="stats-archivo">PC | 13 hrs | ⭐ 7/10</p>
        <p className="descripcion-corta">
          Una experiencia de terror con uno de los mejores iconos del terror para la gente de internet. El modo historia de Slenderman un juego que recomiendo mucho provar; y más con la actualización que obtuvo hace poco.
        </p>
      </div>
    </div>
  </div>
  <div className='archivos'>
  <div className='fila-archivo'>
    <img className='img-archivo-mediana' src={archivo3} alt="the forest" />
    <div className='contenido-archivo'>
      <h2>The Forest</h2>
      <p className="stats-archivo">PC | 65 hrs | ⭐ 7/10</p>
      <p className="descripcion-corta">
        Una experiencia de terror, supervivencia y lo más importante divertirse con amigos. Puede que el juego este algo viejo, y tenga una mala optimización pero eso no quita las risas que puedes tener.
      </p>
    </div>
  </div>
  </div>
  <div className='archivos'>
  <div className='fila-archivo'>
    <img className='img-archivo-mediana' src={archivo4} alt="assassins creed" />
    <div className='contenido-archivo'>
      <h2>Assassin's Creed Odyssey</h2>
      <p className="stats-archivo">Xbox | 90 hrs | ⭐ 8/10</p>
      <p className="descripcion-corta">
        Tal vez deje mucho que desear como Assassin's Creed; pero el sistema RPG fue mejorado mucho más que su antesesor. Si quieres una experiencia RPG, con diversas habilidades y farmeo de niveles. Es uno de los mejores que puedes probar.
      </p>
    </div>
  </div>
  </div>
  <div className='archivos'>
  <div className='fila-archivo'>
    <img className='img-archivo-mediana' src={platino8} alt="Star Wars" />
    <div className='contenido-archivo'>
      <h2>Star Wars Jedi Fallen Order <img className='platino' src={platino} alt="platino PS" /></h2>
      <p className="stats-archivo">PS4 | 40 hrs | ⭐ 8.5/10</p>
      <p className="descripcion-corta">
        Una de las mejores experiencias de Star Wars. Una aventura tipo SoulsLike, planetas por explorar y diferentes enemigos y jefes que puedes derrotar.
      </p>
    </div>
  </div>
  </div>
  <div className='archivos'>
  <div className='fila-archivo'>
    <img className='img-archivo-mediana' src={platino1} alt="Resindet Evil" />
    <div className='contenido-archivo'>
      <h2>Resident Evil 2 Remake <img className='platino' src={platino} alt="platino PS" /></h2>
      <p className="stats-archivo">PS4 | 40 hrs | ⭐ 9/10</p>
      <p className="descripcion-corta">
        Una de las mejores experiencias del Survival Horror. Un juego que deje abandonado más de una vez; pero que al final me encanto tanto que hasta platino se saco.
      </p>
    </div>
  </div>
  </div>
  <div className='archivos'>
  <div className='fila-archivo'>
    <img className='img-archivo-mediana' src={archivo5} alt="Borderlands 2" />
    <div className='contenido-archivo'>
      <h2>Borderlands 2</h2>
      <p className="stats-archivo">PC | 50 hrs | ⭐ 8/10</p>
      <p className="descripcion-corta">
        Un juego que al igual que RE 2 deje abandonado muchas veces, y casi siempre jugaba con un amigo. Pero después de terminalo y seguir jugando; consiguiendo armas y subiendo de nivel, me empezo a gustar más de lo que esperaba.
      </p>
    </div>
  </div>
  </div>
  <div className='archivos'>
  <div className='fila-archivo'>
    <img className='img-archivo-mediana' src={archivo6} alt="Doom" />
    <div className='contenido-archivo'>
      <h2>DOOM 2016</h2>
      <p className="stats-archivo">PC | 50 hrs | ⭐ 8/10</p>
      <p className="descripcion-corta">
        Un de los mejores shooters regreso para tomar otra vez su trono. Un juego que me llamo la atención la primera que lo vi; el frenetismo que sientes al destruir las hordas de demonios que vienen. Si buscas un juego el cual puedas desquitarte, este es el indicado para ti.
      </p>
    </div>
  </div>
  </div>
</>);
const ProyectosPage = () => <div className='ventana-proyectos'> <h2 className='info'>Futuros proyectos y en desarrollo</h2></div>;
const clickAudio = new Audio(clickSound);
clickAudio.preload = "auto";
clickAudio.volume = 0.5;

function App() {
  const [titulo, setTitulo] = useState("SorkiXP Gaming Lab");
  const Proyectos = ["Platinos", "Juegos", "Proyectos"];
  const playClick = () => {
    console.log("intentando que suene");
    clickAudio.currentTime = 0;
    clickAudio.play();
    clickAudio.play().then(() => console.log("Sonando")).catch(e => console.log("navegador bloqueo audio", e));
  }
  return (
    <>

      <BrowserRouter>

        <header className='header'>
          <h1>SorkiXP Gaming Lab</h1>
        </header>

        <nav>
          <Link to="/" onClick={playClick}>Inicio</Link>
          {Proyectos.map((nombre, index) => (
            <Link key={index} to={`/${nombre.toLowerCase()}`}
              onClick={playClick}
            >
              {nombre}
            </Link>
          ))}
        </nav>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Platinos' element={<PlatinosPage />} />
            <Route path='/Juegos' element={<JuegosPage />} />
            <Route path='/Proyectos' element={<ProyectosPage />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>

  )
}

export default App
