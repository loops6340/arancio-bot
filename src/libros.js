const meditacionesFrases = [
    "¡Cuán pequeña parte del tiempo, infinito e insondable, se ha distribuido a cada uno, puesto que en un momento va a abismarse en la nada! ¡Cuán pequeña porción de la substancia universal! ¡Cuán pequeña parte de la vida universal! ¡Cuán pequeña gleba de toda la tierra es ésta en que te arrastras! Considerando todo esto, nada estimes por cosa grande, sino el obrar conforme a las normas de tu naturaleza y el sentir según las exigencias de la naturaleza común.",
    "¡Qué perverso y fingido es el que dice Yo he decidido conducirme limpiamente contigo! ¿Qué haces, pobre amigo mío? No es necesario andarse por las ramas. Esto se verá por sí mismo; debe leerse en tu rostro; inmediatamente suena esto en tu voz; al punto se manifiesta en tus ojos, así como la persona amada conoce todo al instante en las miradas de sus amantes. En suma, el hombre recto y virtuoso debe ser tal cual es el que huele a sobaquina, de manera que quien se le acercare sienta, quiera el otro o no quiera, desde el primer momento, lo que es en realidad. Pues la afectación es arma de doble filo. Nada hay más odioso que la amistad de lobo. Evita este vicio más que los demás. El hombre de veras bueno, recto, benévolo, manifiesta estas cualidades en sus ojos, sin poder ocultarlas.",
    "En los escritos de los efesios se hallaba este aviso: «Tened siempre presente el ejemplo de aquellos antiguos que se dedicaron al ejercicio de la virtud».",
    "Todos aquellos bienes a que deseas llegar por rodeos, puedes alcanzarlos en seguida, si no te quieres mal a ti mismo. Esto es: si dejando de lado todo lo pasado, confías lo futuro a la providencia, y enderezas lo presente según la piedad y la justicia: según la piedad, a fin de abrazar férvidamente cuanto te fuere dispensado, puesto que la naturaleza te lo destinó, y te destinó a ti para ello; según la justicia, para que libremente y sin trabas digas la verdad y obres conforme a la ley y al mérito del objeto. No te sirvan de obstáculo ni la maldad ni la opinión o la palabra ajenas, ni menos las sensaciones de esta mísera carne que te rodea: allá se las tendrá la parte afectada. Ahora, pues, si un día u otro estás al fin de la carrera, te despides de todo lo restante y respetas sólo tu recta razón y la parte divina que hay en ti; si temes, no el poner fin a la vida, sino el no haber comenzado nunca a vivir conforme a la naturaleza, serás un hombre digno de ese mundo que te engendró, dejarás de ser huésped en tu misma patria; de maravillarte de lo que sucede todos los días como si fuera cosa inesperada, de no estar pendiente de tal y tal cosa.",
    "Muchas veces me pregunto, maravillado, cómo es que amándose cada uno a sí mismo más que a todos los otros, estime en menos la opinión propia formada de sí, que la opinión ajena que se merece. Puesto que si un dios apareciéndose a uno de nosotros, o si un sabio maestro ordenase a uno de nosotros no imaginar, no pensar nada, sin proferirlo al mismo punto en voz alta, no habría quien pudiera soportarlo un solo día. En esta conformidad, respetamos más al prójimo cuando opina algo acerca de nosotros que a nosotros mismos.",
    "Cuán ridículo y extraño es aquel que se maravilla de cosa alguna de cuantas pasanen esta vida!",
    "O domina una fatalidad de destino y un orden inviolable, o una providencia aplacable, o un caos entregado al azar, sin dirección alguna. Ahora bien: si reina una fatalidad inflexible, ¿a qué intentas resistirla? Si reina una providencia capaz de dejarse aplacar, hazte digno del socorro divino. Si reina un caos sin ninguna dirección, conténtate de poseer en ti mismo, en medio de ese torbellino, una inteligencia capaz de guiarte. Y si el torbellino te arrollare, que se lleve tras sí tu cuerpo, tu aliento y todas las otras cosas externas: no te arrebatará la inteligencia.",
    "En primer lugar, procura no hacer cosa alguna irreflexivamente, sin relacionarlo con algo; en segundo lugar, no dirijas las acciones a otra cosa más que a la utilidad del bien común.",
    "A los que te preguntaren: «¿En dónde viste a los dioses, y cómo compruebas su existencia, para darles ese culto?», respóndeles, ante todo, que son visibles a nuestros ojos; además, aunque yo no haya visto mi alma, con todo también la respeto. Y lo mismo acontece con los dioses: por las mismas razones que experimento los efectos de su poder en todas las coyunturas, comprendo que existen y los venero.",
    "No es fácil tropezar con un hombre que sea desgraciado por dejar de entrometerse en lo que ocurre en el alma de los demás. Pero los que no escudriñan los movimientos de su propia alma, fuerza es que sean desgraciados.",
    "Como filósofo ha juzgado Teofrasto, cuando en aquella comparación que hacía de las faltas entre sí, afirma —como haría cualquiera que comparase, regido por el sentido común— que las faltas cometidas por concupiscencia son más graves que las cometidas por ira. En efecto, el hombre montado en cólera experimenta cierta pena y 11 una secreta angustia de corazón, al desviarse de la razón. Pero el que peca por concupiscencia, vencido por el deleite, aparenta una cierta debilidad y afeminamiento al incurrir en estas faltas. Con razón, pues, y como filósofo digno de tal nombre, Teofrasto sostiene que los desórdenes cometidos por placer son más censurables que los cometidos con dolor. Ciertamente, en el último caso, el culpable parece ser un hombre provocado por la justicia y forzado a inflamarse en cólera; en el primer caso, por el contrario, es él mismo quien ha decidido ser injusto, arrastrado a obrar así por el capricho de la concupiscencia.",
    "Conforma siempre tus acciones, palabras y pensamientos a la idea de que puedes salir a cada instante de la vida; por más que, si hay dioses, despedirse de los hombres nada quiere decir, pues éstos no sabrían hundirte en la desgracia. Y si no los hay, o bien si no se cuidan de las cosas humanas, ¿a qué vivir en un mundo vacío de dioses o falto de providencia?",
    "Acuérdate de que la facultad rectora se hace inexpugnable cuando, recogida dentro de sí, se contenta con no hacer lo que no es su gusto, aunque sólo se oponga por capricho. ¿Qué será, pues, cuando, gobernada por la razón, emita prudentemente un juicio? La inteligencia libre de pasiones es como una ciudadela; y realmente el hombre no tiene posición más segura donde retirarse para no ser en adelante capturado. Quien no la ha visto es un ignorante; quien, habiéndola visto, no se ampara en ella es un desdichado.",
    "Nada más infeliz que el hombre que lo inquiere todo girando de aquí para allá, que escruta, como dice el poeta, «las profundidades de la tierra», que indaga por conjeturas lo que acontece en el alma ajena, sin acabar de entender que le bastaría sólo aplicarse al dios que habita en su interior y venerarle como es debido. Este culto consiste en conservarse puro de pasiones; de temeridad y de disgusto por aquello que procede de los dioses y de los hombres. Porque lo que viene de los dioses es digno de respeto, por ser obra de sí virtuosa; y lo que viene de los hombres nos es caro a causa del parentesco, si bien a veces no deja de ser, en cierto sentido, objeto de compasión, por su ignorancia del bien y del mal, ceguera no menor que la que nos impide poder discernir lo blanco de lo negro.",
    "Se deshonra el alma del hombre particularmente cuando, por lo que a sí toca, viene a hacerse como un divieso o una excrecencia en el cuerpo del mundo; porque irritarse con alguno de los acontecimientos que sobrevienen es como un absceso de la naturaleza universal, de la cual participan las naturalezas de todos los otros seres. El alma se deshonra asimismo cuando se muestra adversa a alguno de los otros hombres, o se comporta con él con intención de hacerle mal, como acontece con las almas poseídas de ira. Lo tercero, se deshonra cuando se da por vencida del dolor o el placer. Lo cuarto, cuando disimula, finge y altera la verdad por obra o de palabra. Lo quinto, cuando lanza su actividad o sus apetitos sin blanco fijo, y lo ejecuta todo al azar, y sin continuidad, siendo así que aun las más pequeñas acciones debieran tender a un fin propuesto: y el fin de los seres racionales es obedecer a la razón y a la ley de la naturaleza, la más augusta de las ciudades y gobiernos.",
    "Hipócrates, después de curar muchas enfermedades, al cabo cayó enfermo él mismo y murió. A muchos habían pre-dicho los caldeos la muerte, y no por esto dejó de llegarles también su día y destino. Alejandro, Pompeyo y Cayo César, después de haber tantas veces destruido hasta los cimientos ciudades enteras y haber triturado en campo de batalla millaradas de elefantes y jinetes, también ellos, al fin, perdieron la vida. Heráclito, luego de tan prolijos estudios sobre el último incendio del mundo, enfermo de hidropesía y recubierta de inmundicias la piel, murió. Murió Demócrito comido de piojos; y piojos, bien que de otra casta, quitaron la vida a Sócrates. ¿A qué todo esto? Te embarcaste, hiciste el viaje, llegaste al puerto: ¡desembarca! Si es para entrar en una nueva existencia, no echarás de menos a los dioses. No es para quedar del todo insensible, cesarás en los dolores y los placeres, librándote de servir a un envoltorio corporal tanto más vil cuanto le sobrepasa la parte esclavizada: ésta, es inteligencia y divinidad; aquél, fango y sangre impura.",
    "No malogres la parte de vida que te queda en averiguar vidas ajenas, a no ser que te propongas algún fin útil a la comunidad. Te privas ciertamente de cumplir tu deber al revolver en tu imaginación lo que hace fulano y por qué lo hace, qué dice, qué piensa, qué trama, y otras ocupaciones de esta índole que te distraen de la consideración de tu facultad rectora. Conviene, pues, no ensartar en la cadena de nuestros pensamientos lo que es temerario y vano y, más especialmente, lo fútil y lo malvado. Hay que avezarse, además, a tener sólo ideas tales que si alguien de repente te preguntare, bruscamente: «¿En qué piensas ahora?», pudieras responder al instante, con toda franqueza: «en esto» o «en aquello». Se dejará ver entonces, pronto y evidentemente, que todo lo tuyo es simple, bondadoso, digno de un ser sociable e indiferente a los placeres y, en su conjunto, a las ideas de una vida voluptuosa; un ser que no abriga envidia, celos, desconfianza u otra pasión por la cual te fuera preciso avergonzarte al manifestar que la posee tu ánimo",
    "No vagabundees más. Que no has de tener tiempo para releer tus notas, ni las antiguas historias de los romanos y los griegos, ni extractos de tratados que habías reservado para tu vejez. Apresúrate, pues, en llegar al fin; despídete de las vanas esperanzas y mira por tu bien, si tienes cuenta contigo mismo, hasta que sea posible.",
    "Por la mañana, cuando sintieses pereza al levantarte, piensa: Yo me levanto para cumplir con los oficios propios de un hombre. ¿Me desazonaré, pues, si voy a ejecutar aquello para lo que nací, para lo que vine al mundo? ¿A esto fui formado, para arrellanarme en la cama, caliente entre mis cobertores? —Pero esto, dirás, es más agradable—. ¿Fuiste formado, entonces, para solazarte? Y, en suma, ¿naciste para la pasividad o para la actividad? ¿No ves cómo las plantas, los pájaros, las hormigas, las arañas, las abejas, tienen cada cual su tarea propia y contribuyen, a su vez, al buen orden del mundo? Entonces tú, ¿no querrás hacer lo que incumbe al hombre? ¿No te apresurarás en poner por obra lo que se conforma con tu naturaleza?",
    "El señorío interior del hombre, cuando va bien concertado con la naturaleza, adopta respecto a los acontecimientos una posición tal, que en todo momento puede modificarla fácilmente, a tenor de las circunstancias. No tiene preferencia por ninguna materia determinada; se dirige a los objetos principales, aunque con la debida reserva, y si alguno se le opone, conviértelo en materia propia de virtud, no de otra manera que el fuego cuando se apodera de los cuerpos que se le echan encima. Una pequeña mecha se apagaría, pero un fuego vehemente asimila pronto cuanto se le arroja, lo convierte en sí mismo y se levanta así más alto.",
    "Le buscan para solaz el campo, la playa, la montaña; cosas que tú mismo acostumbras a desear con el más vivo anhelo. Todo esto denota vulgaridad de espíritu, teniendo uno en su mano, a cualquier hora, el retirarse en sí mismo. En ningún lugar encuentra el hombre refugio más apacible, más tranquilo, que en su propia alma, sobre todo cuando atesora aquellos bienes que, con una sola ojeada, nos devuelven en seguida la libertad del espíritu: y lo que yo llamo libertad de espíritu no es otra cosa que el estado de un alma bien ordenada.",
    "La muerte, lo mismo que la generación, es un misterio de la naturaleza. La última es la condensación de los mismos elementos que en la otra se disuelven. En suma, nada hay allí que deba avergonzarnos, pues no se halla en ellas cosa que no sea conforme a la condición del ser intelectivo ni a la causa de su constitución.",
    "Haz por semejarte al peñasco batido sin cesar por las olas: permanece inmóvil y a su alrededor desmaya la efervescencia de las aguas. «¡Infeliz de mí, dice uno, porque tal cosa me aconteció!». No, al contrario: «Dichoso yo, porque habiéndome ocurrido esto, continúo sin pena alguna, ni quebrantado por lo presente ni amedrentado por lo venidero. Una semejante desgracia hubiera podido ocurrir a cualquier otro; y éste no hubiera sabido continuar, como yo, sin apenarse». ¿Y por qué será la adversidad un infortunio más bien que una ventura?",
    "Las cosas están recubiertas, a la verdad, de una tal veladura, que a no pocos filósofos, y no de los recién llegados, han parecido del todo incomprensibles; aun los mismos estoicos, las juzgan por lo menos difíciles de comprender. Y es que todo asenso nuestro está sujeto a errar. ¿Dónde hallarás uno que sea inmutable? Da un paso ya hacia los mismos objetos que caen bajo nuestro conocimiento: ¡cuán efímeros son, viles, capaces de pasar al dominio de un libertino, de una ramera, de un malhechor! Después de esto, pasa a las costumbres de aquellos con quienes vives: el más cortés de todos es difícilmente aguantable, por no decir que apenas puede él soportarse a sí mismo.",
    "Estoy compuesto de causa formal y materia. Ninguno de estos elementos será reducido a la nada, del mismo modo que tampoco han salido de la nada. Pues cada parte de mi ser tendrá asignado otro lugar, mediante la transformación en otra parte del mundo; y de nuevo ésta se transformará en otra parte del universo, y así continuará la sucesión hasta la eternidad. Por esta vía de transformación tuve yo principio, y lo mismo mis padres, y por su orden otros, hasta remontarnos así al infinito. Nada se opone a que esto parezca verdad, por más que se divida el gobierno del universo en períodos limitados.",
    "La mejor forma de vengarte de los que te injurian es que no les imites.",
    "Todos los objetos subsistentes se transformarán bien presto y se evaporarán, si es una la substancia universal; o bien se dispersarán",
    "La mayoría de los objetos, de que se admira el vulgo, se reducen a ciertos géneros universales, a aquellas substancias dotadas de una sola forma y de una naturaleza, cuales son las piedras, la madera, las higueras, los olivos. Los hombres de mediana esfera tienden a los seres que poseen alma sensitiva, como los rebaños de ganado mayor y menor. Los hombres de más honor se inclinan a los seres dotados de alma racional, pero no en cuanto es alma universal del mundo, sino de la que se aplica preferentemente a las artes o a alguna forma de ingenio; o, simplemente, gustan poseer un crecido número de esclavos. Mas el hombre que aprecia debidamente su alma racional, en cuanto es universal y social, dejado aparte cualquier otro cuidado, procura guardar, ante todo, en su alma aptitudes y movimientos conformes a la razón y al bien común; y trabaja para que su semejante consiga este fin.",
    "Es vergonzoso que cuando tu cuerpo no renuncia a esta vida, renuncie la primera tu alma.",
    "¿Has visto alguna vez una mano cercenada, un pie o una cabeza cortada y lanzada a cierta distancia del resto del cuerpo? Lo mismo hace consigo, según sus medios, el que no acepta lo que le acaeciere, y se separa a sí mismo del conjunto o ejecuta algo no conducente al interés común. Y tú, en cierto modo, te has excluido de la unión peculiar de la naturaleza, de la cual eres miembro por tu nacimiento: ahora te cercenaste tú mismo. Pero, tan admirablemente se dispuso eso, que puedes reunirte de nuevo al todo. El hombre es el único ser a quien Dios otorgó la facultad de incorporarse de nuevo con su todo, después de haberse separado y cercenado. Considera, por tanto, la bondad con que Dios ha honrado al hombre: ha puesto en su mano el que no se separase de todo punto del universo, y que, una vez segregado, pudiese restituirse de nuevo, fundiéndose con él y recuperando el lugar de miembro participante.",
    "Un obstáculo que dificulte la sensación es un mal para la naturaleza sensitiva; un obstáculo al apetito es asimismo un mal para la naturaleza sensitiva. Del mismo modo puede haber algún otro obstáculo y algún otro mal para la constitución vegetativa. Así pues, un estorbo a la inteligencia será un mal para la naturaleza intelectiva. Aplícate todo esto a ti mismo. ¿Te sobreviene un dolor, un placer? Añade esto a la sensibilidad. ¿Le sobrevino un embarazo al movimiento instintivo? Si te dejas llevar por este movimiento sin reserva, ya en esto mismo estaba el daño de tu naturaleza racional; pero si conservas tu inteligencia no serás aún lesionado ni obstaculizado. Ninguna otra cosa suele oponerse a lo que es propio de la inteligencia más que ella misma; pues a ella no le llegan ni el fuego, ni el hierro, ni el tirano, ni la calumnia, ni otra cosa. Cuando consigue ser como una esfera bien redondeada, continúa siéndolo.",
    "",
    "",

]

const cincoAnillosFrases = [
    `Para las personas que quieran aprender mi ciencia militar, existen normas para el aprendizaje de este arte:
    1.Considerad lo que ees correcto y verdadero
    2.Practicad y cultivad la ciencia
    3.Familiarizaos con las artes
    4.Conoced los principios del oficio
    5.Entended el perjuicio y beneficio de cada cosa.
    7.Tomad conciencia de lo que no es obvio
    8.Sed cuidadosos incluso en los asuntos pequeños
    9.No hagaís nada que sea inútil.`,
    `Existe el contagio en todo. Incluso el sueño puede ser contagiado, lo mismo que el bostezo. Existe el contagio incluso de una época
    En la ciencia militar a gran escala, cuando los adversarios están excitados y con toda evidencia tienen prisa por actuar, os comportáis como si estuvierais somnolientos, dando la apariencia de estar completamente relajados y tranquilos. HAced esto, y los mismos adversarios se verán influidos por este estado de ánimo y perderán su entusiamo.`,
    "",
    "",
    "",
    "",
]

function Libro(titulo, autor, fecha, frases, enlace){
    this.titulo = titulo
    this.autor = autor
    this.fecha = fecha
    this.frases = frases
    this.enlace = enlace
}




const libros = [
    new Libro("Meditaciones", "Marco Aurelio", "Circa 170", meditacionesFrases, "https://cdn.pruebat.org/recursos/recursos/Meditaciones-Marco-Aurelio.pdf")
]