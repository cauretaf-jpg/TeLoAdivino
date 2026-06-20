const baseCards31 = [
  { value: 1, numbers: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31] },
  { value: 2, numbers: [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31] },
  { value: 4, numbers: [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31] },
  { value: 8, numbers: [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31] },
  { value: 16, numbers: [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] }
];

const monthCards = [
  { value: 1, numbers: [1,3,5,7,9,11] },
  { value: 2, numbers: [2,3,6,7,10,11] },
  { value: 4, numbers: [4,5,6,7,12] },
  { value: 8, numbers: [8,9,10,11,12] }
];

const months = ['', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const modes = {
  number: {
    icon: '🔢', eyebrow: 'Modo clásico', title: 'Piensa un número', pill: 'Número',
    copy: 'Piensa un número del 1 al 31. No lo digas. Solo responde si aparece en cada tarjeta.',
    question: '¿Tu número<br>está aquí?', resultCopy: 'Estás pensando en el número'
  },
  birthday: {
    icon: '🎂', eyebrow: 'Modo cumpleaños', title: 'Piensa en tu cumpleaños', pill: 'Cumpleaños',
    copy: 'Piensa en tu día y mes de cumpleaños. Primero adivinaré el día y luego el mes.',
    question: '¿Tu día<br>está aquí?', resultCopy: 'Tu cumpleaños es'
  },
  compatibility: {
    icon: '💘', eyebrow: 'Modo coqueto', title: 'Compatibilidad mágica', pill: 'Química',
    copy: 'Juegan de 2 a 10 personas. Escriben sus nombres, eligen el tipo de compatibilidad y al final calculo los matches con mayor afinidad.',
    question: '¿Qué tanta<br>química tienen?', resultCopy: 'Compatibilidad mágica'
  },
  vibe: {
    icon: '🧭', eyebrow: 'Mapa de conexión', title: 'Descubre tu vibra', pill: 'Vibra',
    copy: 'Responde preguntas mezcladas y descubre si tu energía dominante es clásica, coqueta, íntima o atrevida.',
    question: '¿Cuál es<br>tu vibra?', resultCopy: 'Tu vibra es'
  },
  bottle: {
    icon: '🍾', eyebrow: 'Juego de grupo', title: 'La Botellita', pill: 'Botellita',
    copy: 'Configura participantes. La ruleta elegirá 2 personas y mostrará quiénes deben darse un piquito, siempre con alternativa si alguien no quiere.',
    question: '¿Quiénes<br>saldrán?', resultCopy: 'La Botellita eligió'
  },
  truth: {
    icon: '🎲', eyebrow: 'Juego de grupo', title: 'Verdad o Reto', pill: 'Verdad o Reto',
    copy: 'Configura participantes, elige una intensidad y juega con verdades, retos o selección aleatoria por turnos.',
    question: '¿Verdad<br>o reto?', resultCopy: 'Verdad o Reto'
  },
  likely: {
    icon: '🏆', eyebrow: 'Juego de grupo', title: '¿Quién es más probable?', pill: 'Votación',
    copy: 'Agrega participantes y voten por quién calza mejor con cada pregunta. Al final verás el ranking de la noche.',
    question: '¿Quién es<br>más probable?', resultCopy: 'Ranking de la noche'
  },
  pair: {
    icon: '❤️', eyebrow: 'Modo parejas', title: '¿Qué tanto se conocen?', pill: 'Parejas',
    copy: 'Juego para 2 personas. Una intenta adivinar la respuesta de la otra y luego se revela si realmente se conocen.',
    question: '¿Qué tanto<br>se conocen?', resultCopy: 'Modo parejas'
  }
};


const compatibilityQuestionSets = {
  actual: [
    {
      question: '¿Qué plan prefieres para una primera salida?',
      weight: 8,
      options: [
        { text: 'Café tranquilo', vibe: 'calma' },
        { text: 'Cine y algo rico', vibe: 'ternura' },
        { text: 'Paseo nocturno', vibe: 'misterio' },
        { text: 'Salida espontánea', vibe: 'aventura' }
      ]
    },
    {
      question: '¿Qué te conquista más en alguien?',
      weight: 12,
      options: [
        { text: 'Que me haga reír', vibe: 'humor' },
        { text: 'Que sea detallista', vibe: 'ternura' },
        { text: 'Que me escuche', vibe: 'calma' },
        { text: 'Que tenga seguridad', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué tipo de mensaje te gusta recibir?',
      weight: 8,
      options: [
        { text: 'Algo tierno', vibe: 'ternura' },
        { text: 'Algo gracioso', vibe: 'humor' },
        { text: 'Algo directo', vibe: 'intensidad' },
        { text: 'Algo misterioso', vibe: 'misterio' }
      ]
    },
    {
      question: '¿Qué energía te atrae más?',
      weight: 12,
      options: [
        { text: 'Romántica', vibe: 'ternura' },
        { text: 'Divertida', vibe: 'humor' },
        { text: 'Tranquila', vibe: 'calma' },
        { text: 'Intensa', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué cita elegirías sin pensarlo tanto?',
      weight: 8,
      options: [
        { text: 'Cena bonita', vibe: 'ternura' },
        { text: 'Playa o mirador', vibe: 'misterio' },
        { text: 'Juegos y risas', vibe: 'humor' },
        { text: 'Plan sorpresa', vibe: 'aventura' }
      ]
    },
    {
      question: '¿Qué detalle te derrite más?',
      weight: 10,
      options: [
        { text: 'Una canción dedicada', vibe: 'ternura' },
        { text: 'Un mensaje inesperado', vibe: 'misterio' },
        { text: 'Un abrazo largo', vibe: 'calma' },
        { text: 'Que recuerden algo importante', vibe: 'profundidad' }
      ]
    },
    {
      question: '¿Qué prefieres en una conversación?',
      weight: 12,
      options: [
        { text: 'Reír mucho', vibe: 'humor' },
        { text: 'Hablar profundo', vibe: 'profundidad' },
        { text: 'Coquetear sutilmente', vibe: 'misterio' },
        { text: 'Contarse de todo', vibe: 'calma' }
      ]
    },
    {
      question: '¿Qué te parece más atractivo?',
      weight: 12,
      options: [
        { text: 'La ternura', vibe: 'ternura' },
        { text: 'El humor', vibe: 'humor' },
        { text: 'La seguridad', vibe: 'intensidad' },
        { text: 'La inteligencia', vibe: 'profundidad' }
      ]
    },
    {
      question: '¿Qué harías si te gusta alguien?',
      weight: 8,
      options: [
        { text: 'Se lo digo directo', vibe: 'intensidad' },
        { text: 'Tiro indirectas', vibe: 'misterio' },
        { text: 'Espero señales', vibe: 'calma' },
        { text: 'Me pongo nervioso/a', vibe: 'ternura' }
      ]
    },
    {
      question: '¿Qué tipo de conexión buscas?',
      weight: 10,
      options: [
        { text: 'Algo tranquilo', vibe: 'calma' },
        { text: 'Algo intenso', vibe: 'intensidad' },
        { text: 'Algo divertido', vibe: 'humor' },
        { text: 'Algo serio', vibe: 'profundidad' }
      ]
    }
  ],
  coqueta: [
    {
      question: '¿Cómo te gusta empezar el coqueteo?',
      weight: 10,
      options: [
        { text: 'Con una broma precisa', vibe: 'humor' },
        { text: 'Con una mirada obvia', vibe: 'misterio' },
        { text: 'Con un cumplido sutil', vibe: 'ternura' },
        { text: 'Con una invitación directa', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué indirecta usarías primero?',
      weight: 10,
      options: [
        { text: 'Mandar un meme', vibe: 'humor' },
        { text: 'Dedicar una canción', vibe: 'ternura' },
        { text: 'Decir “me acordé de ti”', vibe: 'misterio' },
        { text: 'Preguntar “¿cuándo nos vemos?”', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué señal te haría sospechar que hay onda?',
      weight: 10,
      options: [
        { text: 'Busca hacerte reír', vibe: 'humor' },
        { text: 'Recuerda detalles tuyos', vibe: 'ternura' },
        { text: 'Te mira distinto', vibe: 'misterio' },
        { text: 'Te habla claro', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Cuál sería tu mensaje coqueto ideal?',
      weight: 10,
      options: [
        { text: '“Me haces reír mucho”', vibe: 'humor' },
        { text: '“Te ves bien hoy”', vibe: 'ternura' },
        { text: '“Hay algo en ti…”', vibe: 'misterio' },
        { text: '“Quiero verte”', vibe: 'intensidad' }
      ]
    },
    {
      question: 'En una conversación, ¿qué juego te gusta más?',
      weight: 9,
      options: [
        { text: 'Molestar con cariño', vibe: 'humor' },
        { text: 'Tirar cumplidos suaves', vibe: 'ternura' },
        { text: 'Dejar frases en suspenso', vibe: 'misterio' },
        { text: 'Subir la tensión con claridad', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué plan tiene más vibra de coqueteo?',
      weight: 9,
      options: [
        { text: 'Karaoke o juegos', vibe: 'humor' },
        { text: 'Helado y caminata', vibe: 'ternura' },
        { text: 'Mirador de noche', vibe: 'misterio' },
        { text: 'Una salida improvisada', vibe: 'aventura' }
      ]
    },
    {
      question: 'Si te gusta alguien, ¿qué delata más?',
      weight: 10,
      options: [
        { text: 'Me río más de lo normal', vibe: 'humor' },
        { text: 'Me pongo más atento/a', vibe: 'ternura' },
        { text: 'Me hago el/la interesante', vibe: 'misterio' },
        { text: 'Me atrevo más', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué final de cita te deja pensando?',
      weight: 10,
      options: [
        { text: 'Una broma interna', vibe: 'humor' },
        { text: 'Un “avísame cuando llegues”', vibe: 'calma' },
        { text: 'Una despedida nerviosa', vibe: 'ternura' },
        { text: 'Una próxima invitación', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué te parece más coqueto?',
      weight: 10,
      options: [
        { text: 'La risa compartida', vibe: 'humor' },
        { text: 'La atención constante', vibe: 'ternura' },
        { text: 'La tensión no dicha', vibe: 'misterio' },
        { text: 'La seguridad para avanzar', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Cómo debería sentirse un buen coqueteo?',
      weight: 12,
      options: [
        { text: 'Liviano y divertido', vibe: 'humor' },
        { text: 'Tierno y cómodo', vibe: 'ternura' },
        { text: 'Lento y misterioso', vibe: 'misterio' },
        { text: 'Claro y con chispa', vibe: 'intensidad' }
      ]
    }
  ],
  profunda: [
    {
      question: '¿Qué necesitas para confiar en alguien?',
      weight: 12,
      options: [
        { text: 'Coherencia en el tiempo', vibe: 'profundidad' },
        { text: 'Paciencia con mis ritmos', vibe: 'calma' },
        { text: 'Cariño claro', vibe: 'ternura' },
        { text: 'Comunicación directa', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué conversación te importa tener temprano?',
      weight: 12,
      options: [
        { text: 'Qué sueña cada uno', vibe: 'profundidad' },
        { text: 'Qué límites tiene cada uno', vibe: 'calma' },
        { text: 'Qué heridas trae cada uno', vibe: 'ternura' },
        { text: 'Qué espera del vínculo', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué valoras más en una relación?',
      weight: 12,
      options: [
        { text: 'Honestidad incómoda', vibe: 'profundidad' },
        { text: 'Estabilidad emocional', vibe: 'calma' },
        { text: 'Cuidado mutuo', vibe: 'ternura' },
        { text: 'Compromiso real', vibe: 'intensidad' }
      ]
    },
    {
      question: 'Cuando hay un problema, ¿qué prefieres?',
      weight: 10,
      options: [
        { text: 'Conversarlo de frente', vibe: 'intensidad' },
        { text: 'Tomar aire y volver', vibe: 'calma' },
        { text: 'Escuchar antes de responder', vibe: 'profundidad' },
        { text: 'Bajar la tensión con cariño', vibe: 'ternura' }
      ]
    },
    {
      question: '¿Qué te hace sentir cuidado/a de verdad?',
      weight: 10,
      options: [
        { text: 'Que me escuchen sin apurarme', vibe: 'profundidad' },
        { text: 'Que respeten mis espacios', vibe: 'calma' },
        { text: 'Que tengan gestos cotidianos', vibe: 'ternura' },
        { text: 'Que sean claros conmigo', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué tipo de apoyo te sirve más?',
      weight: 10,
      options: [
        { text: 'Consejo honesto', vibe: 'profundidad' },
        { text: 'Presencia tranquila', vibe: 'calma' },
        { text: 'Palabras bonitas', vibe: 'ternura' },
        { text: 'Impulso para actuar', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué ritmo emocional te acomoda?',
      weight: 8,
      options: [
        { text: 'Lento y seguro', vibe: 'calma' },
        { text: 'Natural, sin forzar', vibe: 'ternura' },
        { text: 'Profundo desde el inicio', vibe: 'profundidad' },
        { text: 'Intenso si hay conexión', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué admiras en otra persona?',
      weight: 10,
      options: [
        { text: 'Su sensibilidad', vibe: 'ternura' },
        { text: 'Su inteligencia emocional', vibe: 'profundidad' },
        { text: 'Su estabilidad', vibe: 'calma' },
        { text: 'Su determinación', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué te cuesta más mostrar?',
      weight: 8,
      options: [
        { text: 'Mis emociones reales', vibe: 'profundidad' },
        { text: 'Mis inseguridades', vibe: 'calma' },
        { text: 'Mi lado tierno', vibe: 'ternura' },
        { text: 'Lo que realmente quiero', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué conexión elegirías?',
      weight: 8,
      options: [
        { text: 'Una conexión estable', vibe: 'calma' },
        { text: 'Una conexión honesta', vibe: 'profundidad' },
        { text: 'Una conexión cariñosa', vibe: 'ternura' },
        { text: 'Una conexión transformadora', vibe: 'intensidad' }
      ]
    }
  ],
  atrevida: [
    {
      question: '¿Qué tipo de tensión te atrae más?',
      weight: 12,
      options: [
        { text: 'Lenta y evidente', vibe: 'misterio' },
        { text: 'Juguetona', vibe: 'humor' },
        { text: 'Tierna pero intensa', vibe: 'ternura' },
        { text: 'Directa y segura', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué ambiente te parece más sensual?',
      weight: 10,
      options: [
        { text: 'Luz baja', vibe: 'misterio' },
        { text: 'Música suave', vibe: 'calma' },
        { text: 'Noche de lluvia', vibe: 'ternura' },
        { text: 'Una conversación privada', vibe: 'profundidad' }
      ]
    },
    {
      question: '¿Qué gesto te sube más la química?',
      weight: 10,
      options: [
        { text: 'Una mirada sostenida', vibe: 'misterio' },
        { text: 'Una sonrisa provocadora', vibe: 'humor' },
        { text: 'Un cumplido al oído', vibe: 'ternura' },
        { text: 'Un acercamiento decidido', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué ritmo prefieres cuando hay atracción?',
      weight: 10,
      options: [
        { text: 'Lento y con tensión', vibe: 'misterio' },
        { text: 'Natural y cómodo', vibe: 'calma' },
        { text: 'Espontáneo', vibe: 'aventura' },
        { text: 'Intenso si ambos quieren', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué frase te dejaría pensando?',
      weight: 10,
      options: [
        { text: '“Tienes algo distinto”', vibe: 'misterio' },
        { text: '“Me encanta tu energía”', vibe: 'ternura' },
        { text: '“Quédate un rato más”', vibe: 'intensidad' },
        { text: '“Contigo se siente fácil”', vibe: 'calma' }
      ]
    },
    {
      question: '¿Qué te parece más irresistible?',
      weight: 10,
      options: [
        { text: 'La confianza', vibe: 'intensidad' },
        { text: 'El misterio', vibe: 'misterio' },
        { text: 'El humor con picardía', vibe: 'humor' },
        { text: 'La cercanía cuidadosa', vibe: 'ternura' }
      ]
    },
    {
      question: '¿Qué plan tiene más vibra atrevida?',
      weight: 9,
      options: [
        { text: 'Cena con luz baja', vibe: 'misterio' },
        { text: 'Película en casa', vibe: 'ternura' },
        { text: 'Paseo nocturno', vibe: 'aventura' },
        { text: 'Música y conversación', vibe: 'profundidad' }
      ]
    },
    {
      question: '¿Qué tipo de cercanía te gusta más?',
      weight: 10,
      options: [
        { text: 'La que se construye lento', vibe: 'calma' },
        { text: 'La que aparece entre risas', vibe: 'humor' },
        { text: 'La que se siente misteriosa', vibe: 'misterio' },
        { text: 'La que se habla con claridad', vibe: 'intensidad' }
      ]
    },
    {
      question: '¿Qué señal te parece más atractiva?',
      weight: 9,
      options: [
        { text: 'Seguridad sin presión', vibe: 'intensidad' },
        { text: 'Cuidado con intención', vibe: 'ternura' },
        { text: 'Silencios cómodos', vibe: 'calma' },
        { text: 'Miradas que dicen mucho', vibe: 'misterio' }
      ]
    },
    {
      question: '¿Cómo debería sentirse una química intensa?',
      weight: 10,
      options: [
        { text: 'Segura para ambos', vibe: 'calma' },
        { text: 'Juguetona y ligera', vibe: 'humor' },
        { text: 'Misteriosa y lenta', vibe: 'misterio' },
        { text: 'Clara y correspondida', vibe: 'intensidad' }
      ]
    }
  ]
};


const compatibilityExtraQuestions = {
  actual: [
    { question: '¿Qué pesa más para ti al conocer a alguien?', weight: 10, options: [
      { text: 'Que fluya natural', vibe: 'calma' }, { text: 'Que haya humor', vibe: 'humor' }, { text: 'Que se note el interés', vibe: 'intensidad' }, { text: 'Que haya conversación real', vibe: 'profundidad' }
    ]},
    { question: '¿Qué te haría repetir una salida?', weight: 9, options: [
      { text: 'Sentirme en confianza', vibe: 'calma' }, { text: 'Reírme mucho', vibe: 'humor' }, { text: 'Quedar con curiosidad', vibe: 'misterio' }, { text: 'Sentir conexión clara', vibe: 'profundidad' }
    ]},
    { question: '¿Qué estilo de persona te llama más?', weight: 9, options: [
      { text: 'Espontánea', vibe: 'aventura' }, { text: 'Cariñosa', vibe: 'ternura' }, { text: 'Interesante', vibe: 'misterio' }, { text: 'Estable', vibe: 'calma' }
    ]},
    { question: '¿Qué hace que una conexión avance?', weight: 12, options: [
      { text: 'Tiempo compartido', vibe: 'calma' }, { text: 'Comunicación clara', vibe: 'intensidad' }, { text: 'Detalles cotidianos', vibe: 'ternura' }, { text: 'Intereses en común', vibe: 'profundidad' }
    ]}
  ],
  coqueta: [
    { question: '¿Qué señal coqueta te gusta recibir?', weight: 10, options: [
      { text: 'Una respuesta rápida', vibe: 'intensidad' }, { text: 'Un meme con intención', vibe: 'humor' }, { text: 'Una mirada larga', vibe: 'misterio' }, { text: 'Un cumplido suave', vibe: 'ternura' }
    ]},
    { question: '¿Cómo te gusta que nazca la tensión?', weight: 10, options: [
      { text: 'Con bromas', vibe: 'humor' }, { text: 'Con cercanía sutil', vibe: 'ternura' }, { text: 'Con misterio', vibe: 'misterio' }, { text: 'Con claridad', vibe: 'intensidad' }
    ]},
    { question: '¿Qué harías para dejar una indirecta?', weight: 9, options: [
      { text: 'Subiría una historia', vibe: 'misterio' }, { text: 'Mandaría una canción', vibe: 'ternura' }, { text: 'Tiraría una talla', vibe: 'humor' }, { text: 'Invitaría a salir', vibe: 'intensidad' }
    ]},
    { question: '¿Qué momento te parece más coqueto?', weight: 9, options: [
      { text: 'Una risa compartida', vibe: 'humor' }, { text: 'Una conversación tarde', vibe: 'misterio' }, { text: 'Un gesto atento', vibe: 'ternura' }, { text: 'Un “te quería ver”', vibe: 'intensidad' }
    ]}
  ],
  profunda: [
    { question: '¿Qué te hace abrirte emocionalmente?', weight: 12, options: [
      { text: 'La paciencia', vibe: 'calma' }, { text: 'La honestidad', vibe: 'profundidad' }, { text: 'El cuidado', vibe: 'ternura' }, { text: 'La seguridad afectiva', vibe: 'intensidad' }
    ]},
    { question: '¿Qué límite te importa más?', weight: 12, options: [
      { text: 'Mi espacio personal', vibe: 'calma' }, { text: 'Mi ritmo emocional', vibe: 'ternura' }, { text: 'La sinceridad', vibe: 'profundidad' }, { text: 'La claridad de intención', vibe: 'intensidad' }
    ]},
    { question: '¿Qué tipo de vínculo te da paz?', weight: 10, options: [
      { text: 'Uno estable', vibe: 'calma' }, { text: 'Uno honesto', vibe: 'profundidad' }, { text: 'Uno cariñoso', vibe: 'ternura' }, { text: 'Uno comprometido', vibe: 'intensidad' }
    ]},
    { question: '¿Qué conversación no evitarías?', weight: 12, options: [
      { text: 'Lo que sentimos', vibe: 'profundidad' }, { text: 'Lo que esperamos', vibe: 'intensidad' }, { text: 'Lo que nos duele', vibe: 'ternura' }, { text: 'Lo que necesitamos', vibe: 'calma' }
    ]}
  ],
  atrevida: [
    { question: '¿Qué tipo de juego te parece más atractivo?', weight: 10, options: [
      { text: 'Miradas y silencio', vibe: 'misterio' }, { text: 'Risas con picardía', vibe: 'humor' }, { text: 'Cercanía cuidada', vibe: 'ternura' }, { text: 'Claridad y seguridad', vibe: 'intensidad' }
    ]},
    { question: '¿Qué detalle sube más la tensión?', weight: 10, options: [
      { text: 'Una frase al oído', vibe: 'misterio' }, { text: 'Una sonrisa provocadora', vibe: 'humor' }, { text: 'Un gesto delicado', vibe: 'ternura' }, { text: 'Una invitación directa', vibe: 'intensidad' }
    ]},
    { question: '¿Qué ambiente acompaña mejor la química?', weight: 9, options: [
      { text: 'Luz tenue', vibe: 'misterio' }, { text: 'Música y conversación', vibe: 'profundidad' }, { text: 'Comodidad y calma', vibe: 'calma' }, { text: 'Algo espontáneo', vibe: 'aventura' }
    ]},
    { question: '¿Cómo prefieres que avance una tensión correspondida?', weight: 12, options: [
      { text: 'Lento y seguro', vibe: 'calma' }, { text: 'Con señales claras', vibe: 'intensidad' }, { text: 'Con juego y risas', vibe: 'humor' }, { text: 'Con misterio', vibe: 'misterio' }
    ]}
  ]
};

Object.keys(compatibilityExtraQuestions).forEach(key => {
  compatibilityQuestionSets[key] = [
    ...(compatibilityQuestionSets[key] || []),
    ...compatibilityExtraQuestions[key]
  ];
});

const vibeCategoryInfo = {
  actual: {
    label: 'Clásica', icon: '✨',
    short: 'equilibrio, fluidez y comodidad',
    reading: 'Buscas una conexión que fluya natural, con equilibrio entre conversación, humor y comodidad.'
  },
  coqueta: {
    label: 'Coqueta', icon: '😉',
    short: 'juego, señales e indirectas',
    reading: 'Te mueve la curiosidad, el juego de miradas, las bromas con intención y las señales que dejan pensando.'
  },
  profunda: {
    label: 'Íntima', icon: '🌙',
    short: 'confianza, cuidado y profundidad',
    reading: 'Valoras la confianza, las conversaciones honestas y los vínculos que se construyen con calma y cuidado.'
  },
  atrevida: {
    label: 'Atrevida', icon: '🔥',
    short: 'tensión, magnetismo e intensidad',
    reading: 'Te atrae una conexión intensa, segura y con una energía difícil de ignorar, siempre desde la comodidad mutua.'
  }
};

const vibeQuestions = [
  { question: 'Cuando conoces a alguien, ¿qué te interesa primero?', options: [
    { text: 'Que la conversación fluya', category: 'actual' },
    { text: 'Que haya juego e indirectas', category: 'coqueta' },
    { text: 'Que se pueda hablar en serio', category: 'profunda' },
    { text: 'Que exista tensión evidente', category: 'atrevida' }
  ]},
  { question: '¿Qué plan te representa más?', options: [
    { text: 'Café y conversación tranquila', category: 'actual' },
    { text: 'Helado, bromas y caminata', category: 'coqueta' },
    { text: 'Noche de conversación profunda', category: 'profunda' },
    { text: 'Cena con luz baja y música', category: 'atrevida' }
  ]},
  { question: '¿Qué señal te hace enganchar más?', options: [
    { text: 'Que todo se sienta cómodo', category: 'actual' },
    { text: 'Que me tiren una indirecta clara', category: 'coqueta' },
    { text: 'Que me escuchen de verdad', category: 'profunda' },
    { text: 'Una mirada que dice demasiado', category: 'atrevida' }
  ]},
  { question: '¿Cómo prefieres que avance una conexión?', options: [
    { text: 'Natural, sin apuro', category: 'actual' },
    { text: 'Con humor y señales', category: 'coqueta' },
    { text: 'Con confianza y claridad', category: 'profunda' },
    { text: 'Con intensidad correspondida', category: 'atrevida' }
  ]},
  { question: '¿Qué frase elegirías?', options: [
    { text: '“Me gusta hablar contigo”', category: 'actual' },
    { text: '“Me acordé de ti”', category: 'coqueta' },
    { text: '“Gracias por escucharme”', category: 'profunda' },
    { text: '“Quédate un rato más”', category: 'atrevida' }
  ]},
  { question: '¿Qué energía te sale más natural?', options: [
    { text: 'Relajada y cercana', category: 'actual' },
    { text: 'Juguetona y curiosa', category: 'coqueta' },
    { text: 'Sensible y honesta', category: 'profunda' },
    { text: 'Segura e intensa', category: 'atrevida' }
  ]},
  { question: '¿Qué te conquista más?', options: [
    { text: 'La buena vibra cotidiana', category: 'actual' },
    { text: 'La risa con intención', category: 'coqueta' },
    { text: 'La responsabilidad afectiva', category: 'profunda' },
    { text: 'El magnetismo y la seguridad', category: 'atrevida' }
  ]},
  { question: 'En una conversación, ¿qué prefieres?', options: [
    { text: 'Que sea simple y entretenida', category: 'actual' },
    { text: 'Que tenga dobles sentidos suaves', category: 'coqueta' },
    { text: 'Que toque temas importantes', category: 'profunda' },
    { text: 'Que haya tensión en el aire', category: 'atrevida' }
  ]},
  { question: '¿Qué tipo de recuerdo te gustaría dejar?', options: [
    { text: 'Una salida cómoda y bonita', category: 'actual' },
    { text: 'Una broma interna', category: 'coqueta' },
    { text: 'Una conversación que marcó', category: 'profunda' },
    { text: 'Un momento intenso e inolvidable', category: 'atrevida' }
  ]},
  { question: '¿Qué te parece más atractivo?', options: [
    { text: 'La estabilidad', category: 'actual' },
    { text: 'La picardía', category: 'coqueta' },
    { text: 'La profundidad emocional', category: 'profunda' },
    { text: 'La confianza corporal y verbal', category: 'atrevida' }
  ]},
  { question: 'Si alguien te gusta, ¿qué haces?', options: [
    { text: 'Busco más momentos para hablar', category: 'actual' },
    { text: 'Dejo pistas y veo si responde', category: 'coqueta' },
    { text: 'Intento conocer lo que siente', category: 'profunda' },
    { text: 'Subo la intensidad si hay señales', category: 'atrevida' }
  ]},
  { question: '¿Qué tipo de vínculo te llama más?', options: [
    { text: 'Uno que se sienta fácil', category: 'actual' },
    { text: 'Uno con chispa y juego', category: 'coqueta' },
    { text: 'Uno con confianza real', category: 'profunda' },
    { text: 'Uno con química evidente', category: 'atrevida' }
  ]}
];

function pickRandomQuestions(source, count = 10) {
  return [...source]
    .map(item => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, count)
    .map(entry => entry.item);
}

let compatibilityQuestions = compatibilityQuestionSets.actual;

const compatibleVibes = {
  ternura: ['calma', 'misterio', 'profundidad'],
  calma: ['ternura', 'humor', 'profundidad'],
  humor: ['aventura', 'calma', 'ternura'],
  aventura: ['humor', 'intensidad', 'misterio'],
  misterio: ['ternura', 'intensidad', 'aventura'],
  intensidad: ['misterio', 'aventura', 'profundidad'],
  profundidad: ['calma', 'ternura', 'intensidad']
};

let selectedMode = 'number';
let stage = 'main';
let currentCardIndex = 0;
let total = 0;
let birthdayDay = 0;
let lastScreen = 'homeScreen';
let activeCards = baseCards31;
let compatPerson = 1;
let compatQuestionIndex = 0;
let compatParticipantCount = 2;
let selectedCompatibilityMode = 'actual';
let compatParticipantNames = {};
let compatAnswers = {};
let compatLeaderboard = [];
let vibeParticipantCount = 1;
let vibeParticipantNames = {};
let vibePerson = 1;
let vibeQuestionIndex = 0;
let vibeAnswers = {};
let activeVibeQuestions = vibeQuestions;
let lastShareText = '';
const HISTORY_KEY = 'teloAdivinoHistoryV41';
const ROOM_KEY = 'teloAdivinoRoomV45';
const PARTICIPANT_KEY = 'teloAdivinoParticipantIdV42';
const ROOM_TTL_MS = 24 * 60 * 60 * 1000;
const PARTICIPANT_ACTIVE_MS = 2 * 60 * 1000;
let currentRoom = null;
let currentRoomCode = null;
let roomListenerRef = null;
let firebaseOnline = Boolean(window.teloFirebaseReady && window.teloDatabase);
let onlineQuestionIndex = 0;
let onlineLocalAnswers = [];
let lastOnlineResultKey = '';
let lastRenderedOnlineQuestionKey = '';
let bottleParticipantCount = 2;
let bottleParticipantList = ['Persona 1','Persona 2'];
let selectedBottleIntensity = 'suave';
let bottleRounds = [];
let bottlePendingSelection = null;
let bottleWheelRotation = 0;
let bottleStats = {};
let lastRenderedBottleRoundKey = '';
let truthParticipantCount = 2;
let truthParticipantList = ['Persona 1','Persona 2'];
let selectedTruthIntensity = 'suave';
let truthRounds = [];
let truthStats = {};
let lastRenderedTruthRoundKey = '';
let likelyParticipantCount = 3;
let likelyParticipantList = ['Persona 1','Persona 2','Persona 3'];
let likelyQuestionIndex = 0;
let likelyRounds = [];
let likelyStats = {};

let pairPlayers = ['Persona 1', 'Persona 2'];
let pairMode = 'dulce';
let pairRoundIndex = 0;
let pairPhase = 'guess';
let pairGuesserIndex = 0;
let pairGuess = null;
let pairScore = 0;
let pairRounds = [];
let activePairQuestions = [];
let roomHeartbeatTimer = null;
const THEME_KEY = 'teloAdivinoThemeV51';
const ACHIEVEMENTS_KEY = 'teloAdivinoAchievementsV51';

const screens = ['homeScreen','modeScreen','introScreen','compatSetupScreen','vibeSetupScreen','bottleSetupScreen','bottleGameScreen','truthSetupScreen','truthGameScreen','likelySetupScreen','likelyGameScreen','pairSetupScreen','pairGameScreen','gameScreen','compatScreen','onlineRoomScreen','roomLobbyScreen','onlineGameScreen','resultScreen','achievementsScreen','historyScreen','explainScreen'];
const playCard = document.getElementById('playCard');
const stepPill = document.getElementById('stepPill');
const progressDots = document.getElementById('progressDots');
const questionTitle = document.getElementById('questionTitle');
const gameEyebrow = document.getElementById('gameEyebrow');
const resultValue = document.getElementById('resultValue');
const resultCopy = document.getElementById('resultCopy');
const resultNote = document.getElementById('resultNote');
const resultTitle = document.getElementById('resultTitle');
const compatStepPill = document.getElementById('compatStepPill');
const compatEyebrow = document.getElementById('compatEyebrow');
const compatQuestionTitle = document.getElementById('compatQuestionTitle');
const compatHelpText = document.getElementById('compatHelpText');
const compatOptions = document.getElementById('compatOptions');
const compatProgressDots = document.getElementById('compatProgressDots');
const participantNames = document.getElementById('participantNames');
const vibeParticipantNamesEl = document.getElementById('vibeParticipantNames');


const achievementDefinitions = [
  { id: 'first_game', icon: '✨', title: 'Primera partida', text: 'Jugaste tu primera partida en TeLoAdivino.' },
  { id: 'number', icon: '🔢', title: 'Mentalista numérico', text: 'Adivinaste un número.' },
  { id: 'birthday', icon: '🎂', title: 'Calendario mágico', text: 'Adivinaste un cumpleaños.' },
  { id: 'compatibility', icon: '💘', title: 'Matchmaker', text: 'Calculaste una compatibilidad mágica.' },
  { id: 'vibe', icon: '🧭', title: 'Lector/a de vibra', text: 'Descubriste la vibra de una o más personas.' },
  { id: 'bottle', icon: '🍾', title: 'Rey/Reina de la botellita', text: 'Giraste la ruleta de La Botellita.' },
  { id: 'truth', icon: '🎲', title: 'Verdad o Reto', text: 'Jugaste una ronda de Verdad o Reto.' },
  { id: 'likely', icon: '🏆', title: 'Ranking de la noche', text: 'Jugaste ¿Quién es más probable?' },
  { id: 'pair', icon: '❤️', title: 'Modo parejas', text: 'Jugaste ¿Qué tanto se conocen?' },
  { id: 'share', icon: '📲', title: 'Resultado compartido', text: 'Usaste una función de compartir.' },
  { id: 'theme', icon: '🎨', title: 'Cambio de look', text: 'Cambiaste el tema visual de la app.' }
];

function getAchievements() {
  try { return JSON.parse(localStorage.getItem(ACHIEVEMENTS_KEY) || '{}') || {}; }
  catch { return {}; }
}

function saveAchievements(data) {
  localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(data));
}

function unlockAchievement(id) {
  const achievements = getAchievements();
  if (!achievements[id]) {
    achievements[id] = new Date().toISOString();
    achievements.first_game = achievements.first_game || new Date().toISOString();
    saveAchievements(achievements);
  }
  renderAchievements();
}

function renderAchievements() {
  const list = document.getElementById('achievementsList');
  if (!list) return;
  const unlocked = getAchievements();
  list.innerHTML = achievementDefinitions.map(item => {
    const done = Boolean(unlocked[item.id]);
    const date = done ? new Date(unlocked[item.id]).toLocaleDateString('es-CL') : 'Pendiente';
    return `<div class="achievement-card ${done ? 'unlocked' : 'locked'}"><span>${item.icon}</span><div><strong>${item.title}</strong><small>${item.text}</small><em>${date}</em></div></div>`;
  }).join('');
}

function openAchievements() {
  renderAchievements();
  showScreen('achievementsScreen');
}

function applyTheme(theme) {
  const safeTheme = ['default','neon','romantic','dark','summer'].includes(theme) ? theme : 'default';
  document.body.dataset.theme = safeTheme;
  localStorage.setItem(THEME_KEY, safeTheme);
  document.querySelectorAll('.theme-chip').forEach(btn => btn.classList.toggle('active', btn.dataset.theme === safeTheme));
}

function initTheme() {
  applyTheme(localStorage.getItem(THEME_KEY) || 'default');
}

function showScreen(id) {
  screens.forEach(screenId => document.getElementById(screenId).classList.remove('active'));
  const activeScreen = document.getElementById(id);
  activeScreen.classList.add('active');
  // v6.0.6: la barra inferior ya no se mueve dentro de cada pantalla.
  // Debe quedar al final del .app-shell para participar del scroll normal.
  keepBottomNavAtShellEnd();
  updateBottomNav(id);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function keepBottomNavAtShellEnd() {
  const nav = document.querySelector('.bottom-nav');
  const shell = document.querySelector('.app-shell');
  if (!nav || !shell) return;
  // Mueve la navegación al final del contenedor principal, después de todas las pantallas.
  // Como las pantallas inactivas usan display:none, la barra queda después de la pantalla activa.
  if (nav.parentElement !== shell || shell.lastElementChild !== nav) shell.appendChild(nav);
}

function updateBottomNav(id) {
  document.querySelectorAll('.bottom-nav-item').forEach(btn => btn.classList.remove('active'));
  const gameScreens = ['modeScreen','introScreen','compatSetupScreen','vibeSetupScreen','bottleSetupScreen','bottleGameScreen','truthSetupScreen','truthGameScreen','likelySetupScreen','likelyGameScreen','pairSetupScreen','pairGameScreen','gameScreen','compatScreen','resultScreen','explainScreen'];
  const onlineScreens = ['onlineRoomScreen','roomLobbyScreen','onlineGameScreen'];
  if (id === 'homeScreen') document.getElementById('navHomeBtn')?.classList.add('active');
  else if (id === 'achievementsScreen' || id === 'historyScreen') document.getElementById('navAchievementsBtn')?.classList.add('active');
  else if (onlineScreens.includes(id)) document.getElementById('navOnlineBtn')?.classList.add('active');
  else if (gameScreens.includes(id)) document.getElementById('navGamesBtn')?.classList.add('active');
}

function openModes() { showScreen('modeScreen'); }

function prepareMode(mode) {
  selectedMode = mode;
  if (mode === 'online') {
    openOnlineRoom();
    return;
  }
  const data = modes[mode];
  document.getElementById('introPill').textContent = data.pill;
  document.getElementById('introIcon').textContent = data.icon;
  document.getElementById('introEyebrow').textContent = data.eyebrow;
  document.getElementById('introTitle').textContent = data.title;
  document.getElementById('introCopy').textContent = data.copy;
  showScreen('introScreen');
}

function startSelectedMode() {
  total = 0;
  birthdayDay = 0;
  currentCardIndex = 0;
  resultNote.textContent = '';
  resultValue.className = 'result-number';

  if (selectedMode === 'compatibility') {
    showScreen('compatSetupScreen');
    return;
  }

  if (selectedMode === 'vibe') {
    showScreen('vibeSetupScreen');
    return;
  }

  if (selectedMode === 'bottle') {
    showScreen('bottleSetupScreen');
    return;
  }

  if (selectedMode === 'truth') {
    showScreen('truthSetupScreen');
    return;
  }

  if (selectedMode === 'likely') {
    showScreen('likelySetupScreen');
    return;
  }

  if (selectedMode === 'pair') {
    showScreen('pairSetupScreen');
    return;
  }

  if (selectedMode === 'birthday') {
    stage = 'day';
    activeCards = baseCards31;
  } else {
    stage = 'number';
    activeCards = baseCards31;
  }
  renderCard();
  showScreen('gameScreen');
}

function renderCard() {
  const data = modes[selectedMode];
  const label = selectedMode === 'birthday' && stage === 'month' ? 'Mes' : 'Tarjeta';
  stepPill.textContent = `${label} ${currentCardIndex + 1} de ${activeCards.length}`;
  gameEyebrow.textContent = selectedMode === 'birthday' && stage === 'month' ? 'Ahora el mes' : 'Mira con atención';
  questionTitle.innerHTML = selectedMode === 'birthday' && stage === 'month' ? '¿Tu mes<br>está aquí?' : data.question;

  const card = activeCards[currentCardIndex];
  playCard.className = 'play-card number-card';
  playCard.innerHTML = card.numbers.map(number => `<div class="number-cell">${number}</div>`).join('');
  renderDots();
}

function renderDots() {
  progressDots.innerHTML = activeCards.map((_, index) => {
    const className = index < currentCardIndex ? 'dot done' : index === currentCardIndex ? 'dot current' : 'dot';
    return `<span class="${className}"></span>`;
  }).join('');
}

function answer(isYes) {
  if (isYes) total += activeCards[currentCardIndex].value;
  currentCardIndex += 1;

  if (currentCardIndex >= activeCards.length) {
    finishStage();
    return;
  }
  renderCard();
}

function finishStage() {
  if (selectedMode === 'birthday' && stage === 'day') {
    birthdayDay = total;
    total = 0;
    currentCardIndex = 0;
    stage = 'month';
    activeCards = monthCards;
    renderCard();
    return;
  }
  showResult();
}

function showResult() {
  resultTitle.textContent = '¡Ya lo sé!';
  lastShareText = '';
  resultNote.textContent = '';
  resultValue.className = 'result-number';

  if (selectedMode === 'birthday') {
    const monthNumber = total;
    const validDay = birthdayDay >= 1 && birthdayDay <= 31;
    const validMonth = monthNumber >= 1 && monthNumber <= 12;
    resultCopy.textContent = 'Tu cumpleaños es';
    resultValue.classList.add('date-result');
    resultValue.textContent = validDay && validMonth ? `${birthdayDay} de ${months[monthNumber]}` : 'Fecha no válida';
    if (validDay && validMonth) lastShareText = `TeLoAdivino adivinó mi cumpleaños: ${birthdayDay} de ${months[monthNumber]} ✨`;
    if (!validDay || !validMonth) resultNote.textContent = 'Revisa tus respuestas y vuelve a intentarlo.';
  } else {
    resultCopy.textContent = 'Estás pensando en el número';
    resultValue.textContent = total;
    lastShareText = `TeLoAdivino adivinó mi número: ${total} ✨`;
    if (total === 0) resultNote.textContent = 'Parece que respondiste No en todas las tarjetas.';
  }
  unlockAchievement(selectedMode === 'birthday' ? 'birthday' : 'number');
  showScreen('resultScreen');
}


function getParticipantName(personNumber) {
  return compatParticipantNames[personNumber] || `Persona ${personNumber}`;
}

function renderParticipantNameInputs() {
  if (!participantNames) return;
  participantNames.innerHTML = Array.from({ length: compatParticipantCount }, (_, index) => {
    const personNumber = index + 1;
    const currentName = compatParticipantNames[personNumber] || '';
    return `
      <label class="name-field">
        <span>Persona ${personNumber}</span>
        <input type="text" maxlength="22" data-person-name="${personNumber}" placeholder="Nombre ${personNumber}" value="${currentName}">
      </label>
    `;
  }).join('');
}

function collectParticipantNames() {
  compatParticipantNames = {};
  document.querySelectorAll('[data-person-name]').forEach(input => {
    const personNumber = Number(input.dataset.personName);
    const cleanName = input.value.trim();
    compatParticipantNames[personNumber] = cleanName || `Persona ${personNumber}`;
  });
}

function startCompatibility() {
  collectParticipantNames();
  compatibilityQuestions = pickRandomQuestions(compatibilityQuestionSets[selectedCompatibilityMode] || compatibilityQuestionSets.actual, 10);
  compatPerson = 1;
  compatQuestionIndex = 0;
  compatAnswers = {};
  compatLeaderboard = [];
  for (let i = 1; i <= compatParticipantCount; i += 1) compatAnswers[i] = [];
  resultNote.innerHTML = '';
  showCompatibilityStartForPerson(1);
  showScreen('compatScreen');
}

function showCompatibilityStartForPerson(personNumber) {
  const name = getParticipantName(personNumber);
  compatStepPill.textContent = `Turno de ${name}`;
  compatEyebrow.textContent = 'Modo privado';
  compatQuestionTitle.textContent = `Pasa el celular a ${name}`;
  compatHelpText.textContent = 'Sus respuestas quedarán ocultas para el resto. Presiona comenzar cuando esté listo/a.';
  compatOptions.innerHTML = `<button class="primary-button compat-continue" id="startPersonBtn">Comenzar ${name}</button>`;
  compatProgressDots.innerHTML = '';
  document.getElementById('startPersonBtn').addEventListener('click', () => {
    compatPerson = personNumber;
    compatQuestionIndex = 0;
    renderCompatibilityQuestion();
  });
}

function renderCompatibilityQuestion() {
  const totalQuestions = compatibilityQuestions.length;
  const question = compatibilityQuestions[compatQuestionIndex];
  const currentName = getParticipantName(compatPerson);
  compatStepPill.textContent = `${currentName} · ${compatQuestionIndex + 1} de ${totalQuestions}`;
  compatEyebrow.textContent = `Participante ${compatPerson} de ${compatParticipantCount}`;
  compatQuestionTitle.textContent = question.question;
  compatHelpText.textContent = 'Responde sin que el resto mire. Cuando termines, pasa el celular a la siguiente persona.';
  compatOptions.innerHTML = question.options.map((option, index) => `
    <button class="compat-option" data-index="${index}">
      <span>${index + 1}</span>
      <strong>${option.text}</strong>
    </button>
  `).join('');
  compatOptions.querySelectorAll('.compat-option').forEach(button => {
    button.addEventListener('click', () => answerCompatibility(Number(button.dataset.index)));
  });
  renderCompatibilityDots();
}

function renderCompatibilityDots() {
  const totalQuestions = compatibilityQuestions.length;
  compatProgressDots.innerHTML = Array.from({ length: totalQuestions }, (_, index) => {
    const className = index < compatQuestionIndex ? 'dot done' : index === compatQuestionIndex ? 'dot current' : 'dot';
    return `<span class="${className}"></span>`;
  }).join('');
}

function answerCompatibility(optionIndex) {
  compatAnswers[compatPerson].push(optionIndex);
  compatQuestionIndex += 1;

  if (compatQuestionIndex >= compatibilityQuestions.length) {
    if (compatPerson < compatParticipantCount) {
      showCompatibilityHandoff();
    } else {
      showCompatibilityResult();
    }
    return;
  }
  renderCompatibilityQuestion();
}

function showCompatibilityHandoff() {
  const currentName = getParticipantName(compatPerson);
  const nextPerson = compatPerson + 1;
  const nextName = getParticipantName(nextPerson);
  compatStepPill.textContent = 'Respuestas guardadas';
  compatEyebrow.textContent = 'Pausa privada';
  compatQuestionTitle.textContent = `${currentName} terminó`;
  compatHelpText.textContent = `Ahora pasa el celular a ${nextName}. Nadie verá las respuestas anteriores.`;
  compatOptions.innerHTML = `<button class="primary-button compat-continue" id="startNextPersonBtn">Continuar con ${nextName}</button>`;
  compatProgressDots.innerHTML = '';
  document.getElementById('startNextPersonBtn').addEventListener('click', () => showCompatibilityStartForPerson(nextPerson));
}

function scorePair(personA, personB) {
  let score = 0;
  const vibeCounter = {};
  const matchTypes = [];

  compatibilityQuestions.forEach((question, index) => {
    const answerOne = question.options[compatAnswers[personA][index]];
    const answerTwo = question.options[compatAnswers[personB][index]];
    if (!answerOne || !answerTwo) return;

    const weight = question.weight || 10;
    let earned = Math.round(weight * 0.35);
    let matchType = 'diferente';

    if (answerOne.vibe === answerTwo.vibe) {
      earned = weight;
      matchType = 'igual';
    } else if ((compatibleVibes[answerOne.vibe] || []).includes(answerTwo.vibe)) {
      earned = Math.round(weight * 0.75);
      matchType = 'compatible';
    }

    score += earned;
    matchTypes.push(matchType);
    vibeCounter[answerOne.vibe] = (vibeCounter[answerOne.vibe] || 0) + 1;
    vibeCounter[answerTwo.vibe] = (vibeCounter[answerTwo.vibe] || 0) + 1;
  });

  const dominantVibe = Object.entries(vibeCounter).sort((a, b) => b[1] - a[1])[0]?.[0] || 'misterio';
  return { personA, personB, score: Math.max(25, Math.min(100, score)), dominantVibe, matchTypes };
}

function scoreCompatibilityGroup() {
  const pairs = [];
  for (let a = 1; a <= compatParticipantCount; a += 1) {
    for (let b = a + 1; b <= compatParticipantCount; b += 1) {
      pairs.push(scorePair(a, b));
    }
  }
  return pairs.sort((a, b) => b.score - a.score);
}

function getCompatibilityMessage(score, dominantVibe) {
  const vibeLabels = {
    ternura: 'conexión tierna',
    calma: 'complicidad tranquila',
    humor: 'química divertida',
    aventura: 'chispa espontánea',
    misterio: 'tensión misteriosa',
    intensidad: 'atracción intensa',
    profundidad: 'conexión profunda'
  };
  const type = vibeLabels[dominantVibe] || 'conexión misteriosa';

  const tier = score >= 90 ? 'top' : score >= 75 ? 'high' : score >= 55 ? 'mid' : score >= 35 ? 'low' : 'chaos';
  const messages = {
    actual: {
      top: ['Química peligrosa', 'Resultado muy alto. Hay afinidad clara, respuestas parecidas y una conexión que se nota rápido.'],
      high: ['Muy buena vibra', 'Hay buen match. No todo es idéntico, pero varias respuestas conectan bien.'],
      mid: ['Conexión misteriosa', 'Compatibilidad media. Hay coincidencias, diferencias y bastante espacio para descubrirse.'],
      low: ['Atracción con desafío', 'Hay diferencias marcadas. El match existe, pero requiere humor, paciencia y comunicación.'],
      chaos: ['Vibra caótica', 'El resultado es bajo. Hay pocas coincidencias directas, aunque puede servir como juego y conversación.']
    },
    coqueta: {
      top: ['Química evidente', 'Aquí hay miradas largas, risas que se repiten e indirectas que no son tan indirectas. El match tiene chispa.'],
      high: ['Coqueteo con potencial', 'Hay tensión bonita, curiosidad y ganas de seguir hablando. Esto huele a segunda salida.'],
      mid: ['Tensión misteriosa', 'No todo calza perfecto, pero eso lo hace interesante. Hay juego, contraste y preguntas pendientes.'],
      low: ['Coqueteo complicado', 'Hay atracción posible, pero se mezclan señales distintas. Haría falta más claridad y menos adivinanzas.'],
      chaos: ['Caos coqueto', 'No combinan demasiado, pero la historia sería entretenida. A veces lo raro también deja conversación.']
    },
    profunda: {
      top: ['Conexión profunda', 'Hay una base fuerte de cuidado, conversación y forma de vincularse. El match no se queda en la superficie.'],
      high: ['Afinidad emocional', 'Comparten puntos importantes: cómo escuchan, cómo cuidan y cómo imaginan una conexión estable.'],
      mid: ['Encuentro honesto', 'Tienen diferencias, pero también zonas de entendimiento. La conexión dependería de hablar claro y respetar ritmos.'],
      low: ['Ritmos distintos', 'Sus respuestas muestran necesidades diferentes. Puede funcionar si ambos están dispuestos a construir puentes.'],
      chaos: ['Distancia emocional', 'Las formas de conectar son bastante distintas. No es imposible, pero requeriría mucha claridad y paciencia.']
    },
    atrevida: {
      top: ['Tensión evidente', 'Hay magnetismo, señales claras y una química difícil de disimular. La afinidad se siente intensa, pero correspondida.'],
      high: ['Química atrevida', 'Hay una tensión atractiva y bastante juego. No todo está dicho, pero la energía se nota.'],
      mid: ['Atracción con misterio', 'Hay curiosidad y contraste. La química existe, aunque necesitaría más confianza para avanzar.'],
      low: ['Ritmos atrevidos distintos', 'La tensión no aparece igual para ambos. Puede ser entretenido, pero conviene leer mejor las señales.'],
      chaos: ['Caos sensual', 'Las respuestas van por caminos muy distintos. Como juego funciona; como señal, mejor no sacar conclusiones serias.']
    }
  };

  const selected = messages[selectedCompatibilityMode]?.[tier] || messages.actual[tier];
  return { title: selected[0], type, reading: selected[1] };
}

function renderLeaderboard(pairs) {
  return pairs.slice(0, 10).map((pair, index) => `
    <div class="match-row ${index === 0 ? 'best-match' : ''}">
      <strong>${index === 0 ? 'Mejor match' : 'Match'}: ${getParticipantName(pair.personA)} + ${getParticipantName(pair.personB)}</strong>
      <span>${pair.score}%</span>
    </div>
  `).join('');
}

function showCompatibilityResult() {
  const pairs = scoreCompatibilityGroup();
  const best = pairs[0];
  const message = getCompatibilityMessage(best.score, best.dominantVibe);
  const modeLabels = { actual: 'Actual', coqueta: 'Coqueta', profunda: 'Íntima y profunda', atrevida: 'Atrevida' };
  const bestNames = `${getParticipantName(best.personA)} + ${getParticipantName(best.personB)}`;
  resultTitle.textContent = message.title;
  resultCopy.textContent = `${modeLabels[selectedCompatibilityMode]} · ${bestNames} · ${message.type}`;
  resultValue.className = 'result-number compatibility-result';
  resultValue.textContent = `${best.score}%`;
  resultNote.innerHTML = `
    <div class="compat-result-stack">
      <section class="reading-card"><strong>Lectura del match</strong><p>${message.reading}</p></section>
      <section class="reading-card"><strong>Tipo de conexión</strong><p>${message.type}. Este resultado compara coincidencias directas, afinidades compatibles y diferencias de ritmo.</p></section>
      <section class="match-board"><strong>Ranking de afinidad</strong>${renderLeaderboard(pairs)}</section>
    </div>
  `;
  lastShareText = buildShareText(best, message, modeLabels[selectedCompatibilityMode], pairs);
  saveHistory({
    date: new Date().toISOString(), mode: modeLabels[selectedCompatibilityMode], bestNames,
    score: best.score, title: message.title, type: message.type, reading: message.reading
  });
  unlockAchievement('compatibility');
  showScreen('resultScreen');
}

function buildShareText(best, message, modeLabel, pairs) {
  const ranking = pairs.slice(0, 5).map((pair, index) => `${index + 1}. ${getParticipantName(pair.personA)} + ${getParticipantName(pair.personB)} — ${pair.score}%`).join('\n');
  return `Resultado de TeLoAdivino ✨\n\nModo: ${modeLabel}\nMejor match: ${getParticipantName(best.personA)} + ${getParticipantName(best.personB)}\nCompatibilidad mágica: ${best.score}%\nTipo de conexión: ${message.type}\n\n“${message.reading}”\n\nRanking:\n${ranking}`;
}


function getVibeName(personNumber) {
  return vibeParticipantNames[personNumber] || `Persona ${personNumber}`;
}

function renderVibeParticipantNameInputs() {
  if (!vibeParticipantNamesEl) return;
  vibeParticipantNamesEl.innerHTML = Array.from({ length: vibeParticipantCount }, (_, index) => {
    const personNumber = index + 1;
    const currentName = vibeParticipantNames[personNumber] || '';
    return `
      <label class="name-field">
        <span>Persona ${personNumber}</span>
        <input type="text" maxlength="22" data-vibe-person-name="${personNumber}" placeholder="Nombre ${personNumber}" value="${currentName}">
      </label>
    `;
  }).join('');
}

function collectVibeParticipantNames() {
  vibeParticipantNames = {};
  document.querySelectorAll('[data-vibe-person-name]').forEach(input => {
    const personNumber = Number(input.dataset.vibePersonName);
    const cleanName = input.value.trim();
    vibeParticipantNames[personNumber] = cleanName || `Persona ${personNumber}`;
  });
}

function startVibeGame() {
  collectVibeParticipantNames();
  activeVibeQuestions = pickRandomQuestions(vibeQuestions, 10);
  vibePerson = 1;
  vibeQuestionIndex = 0;
  vibeAnswers = {};
  for (let i = 1; i <= vibeParticipantCount; i += 1) vibeAnswers[i] = [];
  resultNote.innerHTML = '';
  showVibeStartForPerson(1);
  showScreen('compatScreen');
}

function showVibeStartForPerson(personNumber) {
  const name = getVibeName(personNumber);
  compatStepPill.textContent = `Turno de ${name}`;
  compatEyebrow.textContent = 'Descubre tu vibra';
  compatQuestionTitle.textContent = `Pasa el celular a ${name}`;
  compatHelpText.textContent = 'La app medirá tu energía entre cuatro categorías: clásica, coqueta, íntima y atrevida.';
  compatOptions.innerHTML = `<button class="primary-button compat-continue" id="startVibePersonBtn">Comenzar ${name}</button>`;
  compatProgressDots.innerHTML = '';
  document.getElementById('startVibePersonBtn').addEventListener('click', () => {
    vibePerson = personNumber;
    vibeQuestionIndex = 0;
    renderVibeQuestion();
  });
}

function renderVibeQuestion() {
  const totalQuestions = activeVibeQuestions.length;
  const question = activeVibeQuestions[vibeQuestionIndex];
  const currentName = getVibeName(vibePerson);
  compatStepPill.textContent = `${currentName} · ${vibeQuestionIndex + 1} de ${totalQuestions}`;
  compatEyebrow.textContent = `Participante ${vibePerson} de ${vibeParticipantCount}`;
  compatQuestionTitle.textContent = question.question;
  compatHelpText.textContent = 'Responde sin que el resto mire. Al terminar, pasa el celular a la siguiente persona.';
  compatOptions.innerHTML = question.options.map((option, index) => `
    <button class="compat-option" data-index="${index}">
      <span>${index + 1}</span>
      <strong>${option.text}</strong>
    </button>
  `).join('');
  compatOptions.querySelectorAll('.compat-option').forEach(button => {
    button.addEventListener('click', () => answerVibe(Number(button.dataset.index)));
  });
  compatProgressDots.innerHTML = Array.from({ length: totalQuestions }, (_, index) => {
    const className = index < vibeQuestionIndex ? 'dot done' : index === vibeQuestionIndex ? 'dot current' : 'dot';
    return `<span class="${className}"></span>`;
  }).join('');
}

function answerVibe(optionIndex) {
  vibeAnswers[vibePerson].push(optionIndex);
  vibeQuestionIndex += 1;
  if (vibeQuestionIndex >= activeVibeQuestions.length) {
    if (vibePerson < vibeParticipantCount) {
      showVibeHandoff();
    } else {
      showVibeResult();
    }
    return;
  }
  renderVibeQuestion();
}

function showVibeHandoff() {
  const currentName = getVibeName(vibePerson);
  const nextPerson = vibePerson + 1;
  const nextName = getVibeName(nextPerson);
  compatStepPill.textContent = 'Respuestas guardadas';
  compatEyebrow.textContent = 'Pausa privada';
  compatQuestionTitle.textContent = `${currentName} terminó`;
  compatHelpText.textContent = `Ahora pasa el celular a ${nextName}. Nadie verá las respuestas anteriores.`;
  compatOptions.innerHTML = `<button class="primary-button compat-continue" id="startNextVibePersonBtn">Continuar con ${nextName}</button>`;
  compatProgressDots.innerHTML = '';
  document.getElementById('startNextVibePersonBtn').addEventListener('click', () => showVibeStartForPerson(nextPerson));
}

function getVibeProfile(personNumber) {
  const counts = { actual: 0, coqueta: 0, profunda: 0, atrevida: 0 };
  activeVibeQuestions.forEach((question, index) => {
    const selected = question.options[vibeAnswers[personNumber][index]];
    if (selected?.category) counts[selected.category] += 1;
  });
  const totalAnswers = Math.max(1, activeVibeQuestions.length);
  const percentages = Object.fromEntries(Object.entries(counts).map(([key, value]) => [key, Math.round((value / totalAnswers) * 100)]));
  const ordered = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
  return { person: personNumber, counts, percentages, primary: ordered[0][0], secondary: ordered[1][0] };
}

function scoreVibePair(profileA, profileB) {
  const keys = Object.keys(vibeCategoryInfo);
  const similarity = keys.reduce((sum, key) => sum + Math.min(profileA.percentages[key], profileB.percentages[key]), 0);
  const score = Math.max(25, Math.min(100, similarity));
  return { personA: profileA.person, personB: profileB.person, score };
}

function renderVibeBars(profile) {
  return Object.entries(vibeCategoryInfo).map(([key, info]) => `
    <div class="vibe-bar-row">
      <span>${info.icon} ${info.label}</span>
      <div class="vibe-bar"><i style="width:${profile.percentages[key]}%"></i></div>
      <strong>${profile.percentages[key]}%</strong>
    </div>
  `).join('');
}

function renderVibeProfiles(profiles) {
  return profiles.map(profile => {
    const primary = vibeCategoryInfo[profile.primary];
    const secondary = vibeCategoryInfo[profile.secondary];
    return `
      <section class="reading-card vibe-profile-card">
        <strong>${getVibeName(profile.person)} · ${primary.icon} Vibra ${primary.label}</strong>
        <p>Secundaria: ${secondary.icon} ${secondary.label}. ${primary.reading}</p>
        <div class="vibe-bars">${renderVibeBars(profile)}</div>
      </section>
    `;
  }).join('');
}

function renderVibeMatchRanking(pairs) {
  if (!pairs.length) return '<p>Juega con 2 o más personas para ver matches de vibra.</p>';
  return pairs.slice(0, 10).map((pair, index) => `
    <div class="match-row ${index === 0 ? 'best-match' : ''}">
      <strong>${index === 0 ? 'Mejor afinidad' : 'Afinidad'}: ${getVibeName(pair.personA)} + ${getVibeName(pair.personB)}</strong>
      <span>${pair.score}%</span>
    </div>
  `).join('');
}

function showVibeResult() {
  const profiles = Array.from({ length: vibeParticipantCount }, (_, index) => getVibeProfile(index + 1));
  const groupCounts = { actual: 0, coqueta: 0, profunda: 0, atrevida: 0 };
  profiles.forEach(profile => Object.keys(groupCounts).forEach(key => { groupCounts[key] += profile.counts[key]; }));
  const groupPrimary = Object.entries(groupCounts).sort((a, b) => b[1] - a[1])[0][0];
  const groupInfo = vibeCategoryInfo[groupPrimary];
  const pairs = [];
  for (let a = 0; a < profiles.length; a += 1) {
    for (let b = a + 1; b < profiles.length; b += 1) pairs.push(scoreVibePair(profiles[a], profiles[b]));
  }
  pairs.sort((a, b) => b.score - a.score);
  const best = pairs[0];
  resultTitle.textContent = 'Mapa de vibra';
  resultCopy.textContent = `Vibra dominante del grupo: ${groupInfo.icon} ${groupInfo.label}`;
  resultValue.className = 'result-number compatibility-result';
  resultValue.textContent = groupInfo.label;
  resultNote.innerHTML = `
    <div class="compat-result-stack">
      <section class="reading-card"><strong>Lectura grupal</strong><p>${groupInfo.reading}</p></section>
      <section class="match-board"><strong>Resultados individuales</strong>${renderVibeProfiles(profiles)}</section>
      <section class="match-board"><strong>Matches de vibra</strong>${renderVibeMatchRanking(pairs)}</section>
    </div>
  `;
  const individual = profiles.map(profile => `${getVibeName(profile.person)}: ${vibeCategoryInfo[profile.primary].label} (${profile.percentages[profile.primary]}%)`).join('\n');
  const ranking = pairs.slice(0, 5).map((pair, index) => `${index + 1}. ${getVibeName(pair.personA)} + ${getVibeName(pair.personB)} — ${pair.score}%`).join('\n');
  lastShareText = `Resultado de TeLoAdivino ✨\n\nJuego: Descubre tu vibra\nVibra dominante del grupo: ${groupInfo.label}\n\nResultados individuales:\n${individual}${best ? `\n\nMejor match: ${getVibeName(best.personA)} + ${getVibeName(best.personB)} — ${best.score}%\n\nRanking:\n${ranking}` : ''}`;
  saveHistory({
    date: new Date().toISOString(), mode: 'Descubre tu vibra', bestNames: best ? `${getVibeName(best.personA)} + ${getVibeName(best.personB)}` : getVibeName(1),
    score: best ? best.score : profiles[0].percentages[profiles[0].primary], title: `Vibra ${groupInfo.label}`, type: groupInfo.short, reading: groupInfo.reading
  });
  unlockAchievement('vibe');
  showScreen('resultScreen');
}


function generateRoomCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 5 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
}

function getBaseInviteUrl() {
  const cleanPath = window.location.href.split('?')[0].split('#')[0];
  return cleanPath || 'https://teloadivino.vercel.app/';
}

function buildInviteLink(code) {
  return `${getBaseInviteUrl()}?room=${encodeURIComponent(code)}`;
}

function getParticipantId() {
  let id = localStorage.getItem(PARTICIPANT_KEY);
  if (!id) {
    id = `p_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem(PARTICIPANT_KEY, id);
  }
  return id;
}

function getRoomRef(code) {
  if (!firebaseOnline) return null;
  return window.teloDatabase.ref(`rooms/${code}`);
}

function getIsHost() {
  const ownId = getParticipantId();
  return !currentRoom?.hostId || currentRoom.hostId === ownId;
}

function isRoomExpired(room = currentRoom) {
  if (!room?.createdAt) return false;
  return Date.now() - Number(room.createdAt) > ROOM_TTL_MS;
}

function getRoomStatusLabel(status) {
  return ({ lobby: 'Lobby', playing: 'Jugando', finished: 'Finalizada' })[status] || 'Lobby';
}

function startRoomHeartbeat() {
  if (roomHeartbeatTimer) clearInterval(roomHeartbeatTimer);
  const tick = async () => {
    if (!firebaseOnline || !currentRoom?.code) return;
    const id = getParticipantId();
    try { await getRoomRef(currentRoom.code).child(`participants/${id}/lastSeen`).set(Date.now()); }
    catch (_) {}
  };
  tick();
  roomHeartbeatTimer = setInterval(tick, 20000);
}

function stopRoomHeartbeat() {
  if (roomHeartbeatTimer) clearInterval(roomHeartbeatTimer);
  roomHeartbeatTimer = null;
}

function normalizeRoom(snapshotValue, fallbackCode = '') {
  const value = snapshotValue || {};
  const participantsObj = value.participants || {};
  const participants = Object.entries(participantsObj)
    .map(([id, participant]) => ({ id, name: String(participant?.name || 'Invitado').slice(0, 30), role: participant?.role || 'Participante', joinedAt: participant?.joinedAt || 0, lastSeen: participant?.lastSeen || 0 }))
    .sort((a, b) => (a.joinedAt || 0) - (b.joinedAt || 0));
  return {
    code: value.code || fallbackCode,
    name: value.name || `Sala ${fallbackCode}`,
    host: value.host || 'Anfitrión',
    hostId: value.hostId || '',
    createdAt: value.createdAt || Date.now(),
    updatedAt: value.updatedAt || value.createdAt || Date.now(),
    expiresAt: value.expiresAt || ((value.createdAt || Date.now()) + ROOM_TTL_MS),
    status: value.status || 'lobby',
    game: value.game || null,
    participants
  };
}

function saveCurrentRoom() {
  if (!currentRoom) return;
  localStorage.setItem(ROOM_KEY, JSON.stringify(currentRoom));
}

function loadSavedRoom() {
  try { return JSON.parse(localStorage.getItem(ROOM_KEY) || 'null'); } catch (_) { return null; }
}

function stopRoomListener() {
  if (roomListenerRef && firebaseOnline) {
    roomListenerRef.off();
  }
  roomListenerRef = null;
}

function listenToRoom(code) {
  if (!firebaseOnline || !code) return;
  stopRoomListener();
  currentRoomCode = code;
  roomListenerRef = getRoomRef(code);
  roomListenerRef.on('value', snapshot => {
    if (!snapshot.exists()) {
      currentRoom = { code, name: `Sala ${code}`, host: 'Anfitrión', createdAt: Date.now(), status: 'lobby', participants: [] };
      renderLobby(false);
      return;
    }
    currentRoom = normalizeRoom(snapshot.val(), code);
    if (isRoomExpired(currentRoom)) {
      if (getIsHost()) getRoomRef(code).remove().catch(() => {});
      alert('Esta sala expiró. Crea una nueva para seguir jugando.');
      currentRoom = null;
      localStorage.removeItem(ROOM_KEY);
      openOnlineRoom();
      return;
    }
    saveCurrentRoom();
    startRoomHeartbeat();
    handleRoomStateChange();
  }, error => {
    console.warn('No se pudo escuchar la sala:', error);
    alert('No se pudo conectar con Firebase. Revisa internet o las reglas de Realtime Database.');
  });
}

function setOnlineStatus(message) {
  const note = document.querySelector('.online-note');
  if (note) note.textContent = message;
}

function setOnlineTab(tab) {
  const isCreate = tab === 'create';
  document.getElementById('createRoomTab')?.classList.toggle('active', isCreate);
  document.getElementById('joinRoomTab')?.classList.toggle('active', !isCreate);
  document.getElementById('createRoomForm')?.classList.toggle('active', isCreate);
  document.getElementById('joinRoomForm')?.classList.toggle('active', !isCreate);
}

function openOnlineRoom() {
  const requestedCode = new URLSearchParams(window.location.search).get('room');
  showScreen('onlineRoomScreen');
  if (requestedCode) {
    setOnlineTab('join');
    const codeInput = document.getElementById('joinCodeInput');
    if (codeInput) codeInput.value = requestedCode.toUpperCase();
  } else {
    setOnlineTab('create');
  }
}

async function createRoom() {
  const name = document.getElementById('roomNameInput')?.value.trim() || 'Sala TeLoAdivino';
  const host = document.getElementById('hostNameInput')?.value.trim() || 'Anfitrión';
  const code = generateRoomCode();
  const participantId = getParticipantId();
  const now = Date.now();

  currentRoom = {
    code,
    name,
    host,
    hostId: participantId,
    createdAt: now,
    updatedAt: now,
    expiresAt: now + ROOM_TTL_MS,
    status: 'lobby',
    participants: [{ id: participantId, name: host, role: 'Anfitrión', joinedAt: now, lastSeen: now }]
  };

  if (firebaseOnline) {
    try {
      await getRoomRef(code).set({
        code,
        name,
        host,
        hostId: participantId,
        createdAt: now,
        updatedAt: now,
        expiresAt: now + ROOM_TTL_MS,
        status: 'lobby',
        participants: {
          [participantId]: { name: host, role: 'Anfitrión', joinedAt: now, lastSeen: now }
        }
      });
      listenToRoom(code);
    } catch (error) {
      console.warn('Error creando sala en Firebase:', error);
      alert('No se pudo crear la sala online. Se usará modo local temporal.');
    }
  }

  saveCurrentRoom();
  renderLobby();
}

async function joinRoom() {
  const code = (document.getElementById('joinCodeInput')?.value.trim() || '').toUpperCase();
  const guest = document.getElementById('guestNameInput')?.value.trim() || 'Invitado';
  if (!code) {
    alert('Escribe el código de la sala.');
    return;
  }
  const participantId = getParticipantId();
  const now = Date.now();

  if (firebaseOnline) {
    try {
      const roomSnapshot = await getRoomRef(code).once('value');
      if (!roomSnapshot.exists()) {
        alert('No encontré esa sala. Revisa el código o pide que te compartan nuevamente el QR.');
        return;
      }
      const roomData = roomSnapshot.val() || {};
      if (roomData.status === 'finished') {
        alert('Esta sala ya fue finalizada. Pide al anfitrión crear una nueva.');
        return;
      }
      if (Date.now() - Number(roomData.createdAt || Date.now()) > ROOM_TTL_MS) {
        alert('Esta sala expiró. Pide al anfitrión crear una nueva.');
        return;
      }
      await getRoomRef(code).child(`participants/${participantId}`).set({
        name: guest,
        role: 'Participante',
        joinedAt: now,
        lastSeen: now
      });
      listenToRoom(code);
    } catch (error) {
      console.warn('Error uniéndose a la sala:', error);
      alert('No se pudo unir a la sala. Revisa internet o las reglas de Firebase.');
      return;
    }
  } else {
    currentRoom = loadSavedRoom();
    if (!currentRoom || currentRoom.code !== code) {
      currentRoom = { code, name: `Sala ${code}`, host: 'Anfitrión', createdAt: now, status: 'lobby', participants: [] };
    }
    if (!currentRoom.participants.some(p => p.name.toLowerCase() === guest.toLowerCase())) {
      currentRoom.participants.push({ id: participantId, name: guest, role: 'Participante', joinedAt: now, lastSeen: now });
    }
  }

  saveCurrentRoom();
  renderLobby();
}

async function addManualParticipant() {
  const input = document.getElementById('manualParticipantInput');
  const name = input?.value.trim();
  if (!name || !currentRoom) return;
  const id = `manual_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  const now = Date.now();

  if (firebaseOnline && currentRoom.code) {
    try {
      await getRoomRef(currentRoom.code).child(`participants/${id}`).set({ name, role: 'Manual', joinedAt: now, lastSeen: now });
    } catch (error) {
      console.warn('No se pudo agregar participante manual:', error);
    }
  } else if (!currentRoom.participants.some(p => p.name.toLowerCase() === name.toLowerCase())) {
    currentRoom.participants.push({ id, name, role: 'Manual', joinedAt: now, lastSeen: now });
    saveCurrentRoom();
    renderLobby();
  }
  if (input) input.value = '';
}

function renderLobby(activateScreen = true) {
  if (!currentRoom) currentRoom = loadSavedRoom();
  if (!currentRoom) { openOnlineRoom(); return; }
  const invite = buildInviteLink(currentRoom.code);
  document.getElementById('roomLobbyPill').textContent = `Sala ${currentRoom.code}`;
  document.getElementById('roomTitle').textContent = currentRoom.name;
  document.getElementById('roomCodeText').textContent = currentRoom.code;
  const statusBadge = document.getElementById('roomStatusBadge');
  if (statusBadge) {
    statusBadge.textContent = getRoomStatusLabel(currentRoom.status);
    statusBadge.dataset.status = currentRoom.status || 'lobby';
  }
  const hostText = document.getElementById('roomHostText');
  if (hostText) hostText.textContent = `Anfitrión: ${currentRoom.host || '—'} · Expira en 24 horas`;
  const isHost = getIsHost();
  document.getElementById('finishRoomBtn')?.classList.toggle('hidden', !isHost || currentRoom.status === 'finished');
  document.getElementById('backToLobbyBtn')?.classList.toggle('hidden', !isHost || currentRoom.status === 'lobby' || currentRoom.status === 'finished');
  const linkInput = document.getElementById('inviteLinkInput');
  if (linkInput) linkInput.value = invite;
  const qr = document.getElementById('roomQrImage');
  if (qr) qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(invite)}`;
  const list = document.getElementById('roomParticipantsList');
  if (list) {
    list.innerHTML = currentRoom.participants.map((participant, index) => `
      <div class="room-participant">
        <span>${index + 1}</span>
        <strong>${participant.name}</strong>
        <small>${participant.role || 'Participante'} · ${Date.now() - Number(participant.lastSeen || 0) < PARTICIPANT_ACTIVE_MS ? 'en línea' : 'sin actividad'}</small>
      </div>
    `).join('') || '<div class="empty-history">Aún no hay participantes.</div>';
  }
  updateOnlineStartControls();
  setOnlineStatus(firebaseOnline
    ? 'Sala conectada a Firebase Realtime Database. Los participantes se actualizan en tiempo real.'
    : 'Modo local: Firebase no cargó. Revisa internet o la configuración.');
  if (activateScreen) showScreen('roomLobbyScreen');
}

async function clearCurrentRoom() {
  const code = currentRoom?.code || currentRoomCode;
  const isHost = getIsHost();
  stopRoomListener();
  stopRoomHeartbeat();
  if (firebaseOnline && code) {
    try {
      if (isHost) await getRoomRef(code).remove();
      else await getRoomRef(code).child(`participants/${getParticipantId()}`).remove();
    } catch (error) { console.warn('No se pudo salir/cerrar la sala:', error); }
  }
  currentRoom = null;
  currentRoomCode = null;
  onlineQuestionIndex = 0;
  onlineLocalAnswers = [];
  lastOnlineResultKey = '';
  lastRenderedOnlineQuestionKey = '';
  localStorage.removeItem(ROOM_KEY);
  openOnlineRoom();
}

async function leaveCurrentRoom() {
  if (!currentRoom?.code) return openOnlineRoom();
  const isHost = getIsHost();
  const message = isHost
    ? 'Eres anfitrión. Si sales, se cerrará la sala para todos. ¿Continuar?'
    : '¿Quieres abandonar esta sala?';
  if (!confirm(message)) return;
  await clearCurrentRoom();
}

async function finishCurrentRoom() {
  if (!firebaseOnline || !currentRoom?.code) return;
  if (!getIsHost()) return alert('Solo la persona anfitriona puede finalizar la sala.');
  if (!confirm('¿Finalizar la partida para todas las personas?')) return;
  try {
    await getRoomRef(currentRoom.code).update({ status: 'finished', updatedAt: Date.now() });
  } catch (error) {
    console.warn('No se pudo finalizar la sala:', error);
    alert('No se pudo finalizar la sala. Revisa la conexión.');
  }
}

async function returnRoomToLobby() {
  if (!firebaseOnline || !currentRoom?.code) return;
  if (!getIsHost()) return alert('Solo la persona anfitriona puede volver al lobby.');
  try {
    await getRoomRef(currentRoom.code).update({ status: 'lobby', updatedAt: Date.now(), game: null });
  } catch (error) {
    console.warn('No se pudo volver al lobby:', error);
    alert('No se pudo volver al lobby. Revisa la conexión.');
  }
}


function getCurrentParticipant() {
  const id = getParticipantId();
  return currentRoom?.participants?.find(participant => participant.id === id) || null;
}

function getActiveOnlineParticipants() {
  return (currentRoom?.participants || []).filter(participant => {
    if ((participant.role || '').toLowerCase() === 'manual') return false;
    if (!participant.lastSeen) return true;
    return Date.now() - Number(participant.lastSeen) < 10 * 60 * 1000;
  });
}

function updateOnlineStartControls() {
  const button = document.getElementById('startOnlineCompatibilityBtn');
  const bottleButton = document.getElementById('startOnlineBottleBtn');
  const truthButton = document.getElementById('startOnlineTruthBtn');
  const hint = document.getElementById('onlineStartHint');
  const select = document.getElementById('onlineCompatibilityModeSelect');
  const bottleSelect = document.getElementById('onlineBottleIntensitySelect');
  const bottleToggle = document.getElementById('onlineBottlePhysicalToggle');
  if (!button || !hint) return;
  const activeParticipants = getActiveOnlineParticipants();
  const ownId = getParticipantId();
  const isHost = !currentRoom?.hostId || currentRoom.hostId === ownId;
  const canStart = Boolean(firebaseOnline && currentRoom?.code && activeParticipants.length >= 2 && isHost && currentRoom.status === 'lobby');
  button.disabled = !canStart;
  if (bottleButton) bottleButton.disabled = !canStart;
  if (truthButton) truthButton.disabled = !canStart;
  if (select) select.disabled = currentRoom?.status !== 'lobby';
  if (bottleSelect) bottleSelect.disabled = currentRoom?.status !== 'lobby';
  if (bottleToggle) bottleToggle.disabled = currentRoom?.status !== 'lobby';
  if (!firebaseOnline) hint.textContent = 'Firebase no está conectado. Revisa internet y vuelve a cargar.';
  else if (!isHost) hint.textContent = 'Solo la persona anfitriona puede iniciar el juego.';
  else if (activeParticipants.length < 2) hint.textContent = 'Necesitas al menos 2 participantes conectados desde sus celulares.';
  else if (currentRoom?.status !== 'lobby') hint.textContent = currentRoom?.status === 'finished' ? 'La sala fue finalizada.' : 'La partida ya está iniciada.';
  else hint.textContent = 'Cuando estén todas las personas, inicia Compatibilidad mágica, La Botellita o Verdad o Reto online.';
}

function updateOnlineGameActions() {
  const isHost = getIsHost();
  document.getElementById('onlineBackToLobbyBtn')?.classList.toggle('hidden', !isHost || currentRoom?.status !== 'playing');
  document.getElementById('onlineFinishRoomBtn')?.classList.toggle('hidden', !isHost || currentRoom?.status === 'finished');
}

function handleRoomStateChange(force = false) {
  if (!currentRoom) return;
  if (currentRoom.status === 'finished') {
    showScreen('onlineGameScreen');
    const pill = document.getElementById('onlineGamePill');
    const eyebrow = document.getElementById('onlineGameEyebrow');
    const title = document.getElementById('onlineGameTitle');
    const help = document.getElementById('onlineGameHelp');
    const options = document.getElementById('onlineGameOptions');
    const dots = document.getElementById('onlineGameProgressDots');
    if (pill) pill.textContent = `Sala ${currentRoom.code}`;
    if (eyebrow) eyebrow.textContent = 'Sala finalizada';
    if (title) title.textContent = 'La partida terminó';
    if (help) help.textContent = 'El anfitrión finalizó esta sala. Puedes crear o unirte a otra sala.';
    if (options) options.innerHTML = '<button class="primary-button" id="goOnlineAfterFinishBtn">Crear o unirse a otra sala</button>';
    if (dots) dots.innerHTML = '';
    document.getElementById('goOnlineAfterFinishBtn')?.addEventListener('click', clearCurrentRoom);
    return;
  }
  if (currentRoom.status === 'playing' && currentRoom.game?.type === 'bottle') {
    renderOnlineBottle(force);
    return;
  }
  if (currentRoom.status === 'playing' && currentRoom.game?.type === 'truth') {
    renderOnlineTruth(force);
    return;
  }
  if (currentRoom.status === 'playing' && currentRoom.game?.type === 'compatibility') {
    if (currentRoom.game.result) {
      showOnlineCompatibilityResult(currentRoom.game.result);
      return;
    }
    renderOnlineCompatibility(force);
    return;
  }
  lastOnlineResultKey = '';
  lastRenderedOnlineQuestionKey = '';
  renderLobby(false);
}

async function startOnlineCompatibilityGame() {
  if (!firebaseOnline || !currentRoom?.code) {
    alert('Firebase no está conectado. Recarga la página e intenta nuevamente.');
    return;
  }
  const activeParticipants = getActiveOnlineParticipants();
  if (activeParticipants.length < 2) {
    alert('Necesitas al menos 2 participantes conectados desde sus celulares.');
    return;
  }
  const ownId = getParticipantId();
  if (currentRoom.hostId && currentRoom.hostId !== ownId) {
    alert('Solo la persona anfitriona puede iniciar el juego.');
    return;
  }
  const mode = document.getElementById('onlineCompatibilityModeSelect')?.value || 'actual';
  const questions = pickRandomQuestions(compatibilityQuestionSets[mode] || compatibilityQuestionSets.actual, 10);
  onlineQuestionIndex = 0;
  onlineLocalAnswers = [];
  lastOnlineResultKey = '';
  lastRenderedOnlineQuestionKey = '';
  try {
    await getRoomRef(currentRoom.code).update({
      status: 'playing',
      updatedAt: Date.now(),
      game: {
        type: 'compatibility',
        mode,
        startedAt: Date.now(),
        questions,
        answers: {}
      }
    });
  } catch (error) {
    console.warn('No se pudo iniciar el juego online:', error);
    alert('No se pudo iniciar el juego. Revisa la conexión o las reglas de Firebase.');
  }
}

function getOnlineModeLabel(mode) {
  return ({ actual: 'Actual', coqueta: 'Coqueta', profunda: 'Íntima y profunda', atrevida: 'Atrevida' })[mode] || 'Actual';
}

function getOnlineQuestionSet() {
  return currentRoom?.game?.questions || [];
}

function getOnlineAnswersObj() {
  return currentRoom?.game?.answers || {};
}

function renderOnlineCompatibility(force = false) {
  const game = currentRoom?.game;
  if (!game || game.type !== 'compatibility') return;
  const participant = getCurrentParticipant();
  const options = document.getElementById('onlineGameOptions');
  const dots = document.getElementById('onlineGameProgressDots');
  const pill = document.getElementById('onlineGamePill');
  const eyebrow = document.getElementById('onlineGameEyebrow');
  const title = document.getElementById('onlineGameTitle');
  const help = document.getElementById('onlineGameHelp');
  if (!options || !dots || !pill || !eyebrow || !title || !help) return;

  const questions = getOnlineQuestionSet();
  const activeParticipants = getActiveOnlineParticipants();
  const answers = getOnlineAnswersObj();
  const completed = activeParticipants.filter(p => Array.isArray(answers[p.id]) && answers[p.id].length >= questions.length);

  if (!participant) {
    showScreen('onlineGameScreen');
    updateOnlineGameActions();
    pill.textContent = `Sala ${currentRoom.code}`;
    eyebrow.textContent = 'Participante no registrado';
    title.textContent = 'Únete a la sala para jugar';
    help.textContent = 'Abre el link de invitación, escribe tu nombre y presiona Unirse a sala.';
    options.innerHTML = '<button class="primary-button" id="goJoinFromGameBtn">Unirme a la sala</button>';
    dots.innerHTML = '';
    document.getElementById('goJoinFromGameBtn')?.addEventListener('click', openOnlineRoom);
    return;
  }

  if (!questions.length) {
    showScreen('onlineGameScreen');
    updateOnlineGameActions();
    pill.textContent = 'Preparando';
    eyebrow.textContent = 'Juego online';
    title.textContent = 'Preparando preguntas';
    help.textContent = 'Espera unos segundos.';
    options.innerHTML = '';
    dots.innerHTML = '';
    return;
  }

  const myAnswers = Array.isArray(answers[participant.id]) ? answers[participant.id] : onlineLocalAnswers;
  if (myAnswers.length >= questions.length) {
    if (completed.length >= activeParticipants.length) {
      publishOnlineCompatibilityResultIfReady();
      if (currentRoom.game?.result) showOnlineCompatibilityResult(currentRoom.game.result);
      else renderOnlineResultPending(completed.length, activeParticipants.length);
      return;
    }
    showScreen('onlineGameScreen');
    updateOnlineGameActions();
    pill.textContent = `Sala ${currentRoom.code}`;
    eyebrow.textContent = `${getOnlineModeLabel(game.mode)} · respuestas guardadas`;
    title.textContent = 'Esperando al resto';
    help.textContent = 'Tus respuestas ya quedaron guardadas. El resultado aparecerá cuando todas las personas terminen.';
    options.innerHTML = `
      <div class="online-wait-card">
        <strong>${completed.length} de ${activeParticipants.length} personas listas</strong>
        <div class="online-answer-list">
          ${activeParticipants.map(p => `<div><span>${p.name}</span><small>${Array.isArray(answers[p.id]) && answers[p.id].length >= questions.length ? 'Listo' : 'Pendiente'}</small></div>`).join('')}
        </div>
      </div>`;
    dots.innerHTML = '';
    return;
  }

  onlineQuestionIndex = Math.min(myAnswers.length, questions.length - 1);
  const renderKey = `${currentRoom.code}:${game.startedAt}:${participant.id}:${onlineQuestionIndex}:${myAnswers.length}`;
  if (!force && lastRenderedOnlineQuestionKey === renderKey && document.getElementById('onlineGameScreen')?.classList.contains('active')) return;
  lastRenderedOnlineQuestionKey = renderKey;

  const question = questions[onlineQuestionIndex];
  showScreen('onlineGameScreen');
  updateOnlineGameActions();
  pill.textContent = `${participant.name} · ${onlineQuestionIndex + 1} de ${questions.length}`;
  eyebrow.textContent = `Compatibilidad ${getOnlineModeLabel(game.mode)}`;
  title.textContent = question.question;
  help.textContent = 'Responde desde tu celular. Nadie verá tus respuestas.';
  options.innerHTML = question.options.map((option, index) => `
    <button class="compat-option" data-online-index="${index}">
      <span>${index + 1}</span>
      <strong>${option.text}</strong>
    </button>
  `).join('');
  options.querySelectorAll('[data-online-index]').forEach(button => {
    button.addEventListener('click', () => answerOnlineCompatibility(Number(button.dataset.onlineIndex)));
  });
  dots.innerHTML = questions.map((_, index) => {
    const className = index < myAnswers.length ? 'dot done' : index === onlineQuestionIndex ? 'dot current' : 'dot';
    return `<span class="${className}"></span>`;
  }).join('');
}

async function answerOnlineCompatibility(optionIndex) {
  const participant = getCurrentParticipant();
  if (!firebaseOnline || !currentRoom?.code || !participant) return;
  const questions = getOnlineQuestionSet();
  const answers = getOnlineAnswersObj();
  const existing = Array.isArray(answers[participant.id]) ? [...answers[participant.id]] : [...onlineLocalAnswers];
  if (existing.length >= questions.length) return;
  existing.push(optionIndex);
  onlineLocalAnswers = existing;
  try {
    await getRoomRef(currentRoom.code).child(`game/answers/${participant.id}`).set(existing);
  } catch (error) {
    console.warn('No se pudo guardar la respuesta:', error);
    alert('No se pudo guardar tu respuesta. Revisa internet e intenta nuevamente.');
  }
  renderOnlineCompatibility(true);
}

function scoreOnlinePair(personA, personB, questions, answers) {
  let score = 0;
  const vibeCounter = {};
  questions.forEach((question, index) => {
    const answerOne = question.options[answers[personA.id]?.[index]];
    const answerTwo = question.options[answers[personB.id]?.[index]];
    if (!answerOne || !answerTwo) return;
    const weight = question.weight || 10;
    let earned = Math.round(weight * 0.35);
    if (answerOne.vibe === answerTwo.vibe) earned = weight;
    else if ((compatibleVibes[answerOne.vibe] || []).includes(answerTwo.vibe)) earned = Math.round(weight * 0.75);
    score += earned;
    vibeCounter[answerOne.vibe] = (vibeCounter[answerOne.vibe] || 0) + 1;
    vibeCounter[answerTwo.vibe] = (vibeCounter[answerTwo.vibe] || 0) + 1;
  });
  const dominantVibe = Object.entries(vibeCounter).sort((a, b) => b[1] - a[1])[0]?.[0] || 'misterio';
  return { personA, personB, score: Math.max(25, Math.min(100, score)), dominantVibe };
}

function getOnlinePairs() {
  const questions = getOnlineQuestionSet();
  const answers = getOnlineAnswersObj();
  const activeParticipants = getActiveOnlineParticipants().filter(p => Array.isArray(answers[p.id]) && answers[p.id].length >= questions.length);
  const pairs = [];
  for (let a = 0; a < activeParticipants.length; a += 1) {
    for (let b = a + 1; b < activeParticipants.length; b += 1) {
      pairs.push(scoreOnlinePair(activeParticipants[a], activeParticipants[b], questions, answers));
    }
  }
  return pairs.sort((a, b) => b.score - a.score);
}

function renderOnlineLeaderboard(pairs) {
  return pairs.slice(0, 10).map((pair, index) => `
    <div class="match-row ${index === 0 ? 'best-match' : ''}">
      <strong>${index === 0 ? 'Mejor match' : 'Match'}: ${pair.personA.name} + ${pair.personB.name}</strong>
      <span>${pair.score}%</span>
    </div>
  `).join('');
}

function renderOnlineResultPending(done, total) {
  showScreen('onlineGameScreen');
  updateOnlineGameActions();
  const pill = document.getElementById('onlineGamePill');
  const eyebrow = document.getElementById('onlineGameEyebrow');
  const title = document.getElementById('onlineGameTitle');
  const help = document.getElementById('onlineGameHelp');
  const options = document.getElementById('onlineGameOptions');
  const dots = document.getElementById('onlineGameProgressDots');
  if (pill) pill.textContent = `Sala ${currentRoom?.code || ''}`;
  if (eyebrow) eyebrow.textContent = 'Calculando resultado';
  if (title) title.textContent = 'Resultado casi listo';
  if (help) help.textContent = 'Todas las personas terminaron. La sala está sincronizando el resultado para todos.';
  if (options) options.innerHTML = `<div class="online-wait-card"><strong>${done} de ${total} personas listas</strong><p>Espera unos segundos.</p></div>`;
  if (dots) dots.innerHTML = '';
}

async function publishOnlineCompatibilityResultIfReady() {
  if (!firebaseOnline || !currentRoom?.code || currentRoom.game?.result) return;
  const questions = getOnlineQuestionSet();
  const answers = getOnlineAnswersObj();
  const activeParticipants = getActiveOnlineParticipants();
  if (!questions.length || activeParticipants.length < 2) return;
  const completed = activeParticipants.filter(p => Array.isArray(answers[p.id]) && answers[p.id].length >= questions.length);
  if (completed.length < activeParticipants.length) return;

  const previousMode = selectedCompatibilityMode;
  selectedCompatibilityMode = currentRoom.game?.mode || 'actual';
  const pairs = getOnlinePairs();
  const best = pairs[0];
  if (!best) {
    selectedCompatibilityMode = previousMode;
    return;
  }
  const message = getCompatibilityMessage(best.score, best.dominantVibe);
  selectedCompatibilityMode = previousMode;
  const resultPayload = {
    createdAt: Date.now(),
    mode: currentRoom.game?.mode || 'actual',
    message,
    best: {
      score: best.score,
      dominantVibe: best.dominantVibe,
      personA: { id: best.personA.id, name: best.personA.name },
      personB: { id: best.personB.id, name: best.personB.name }
    },
    pairs: pairs.slice(0, 20).map(pair => ({
      score: pair.score,
      dominantVibe: pair.dominantVibe,
      personA: { id: pair.personA.id, name: pair.personA.name },
      personB: { id: pair.personB.id, name: pair.personB.name }
    }))
  };

  try {
    await getRoomRef(currentRoom.code).child('game/result').transaction(current => current || resultPayload);
  } catch (error) {
    console.warn('No se pudo publicar el resultado online:', error);
  }
}

function showOnlineCompatibilityResult(persistedResult = null) {
  const game = currentRoom?.game;
  const result = persistedResult || game?.result;
  const resultKey = `${currentRoom?.code}:${game?.startedAt}:result:${result?.createdAt || 'local'}`;
  if (lastOnlineResultKey === resultKey && document.getElementById('resultScreen')?.classList.contains('active')) return;
  lastOnlineResultKey = resultKey;

  let pairs = result?.pairs || [];
  let best = result?.best || null;
  let message = result?.message || null;

  if (!best || !message) {
    const previousMode = selectedCompatibilityMode;
    selectedCompatibilityMode = game?.mode || 'actual';
    pairs = getOnlinePairs();
    const localBest = pairs[0];
    if (!localBest) {
      selectedCompatibilityMode = previousMode;
      return;
    }
    message = getCompatibilityMessage(localBest.score, localBest.dominantVibe);
    best = {
      score: localBest.score,
      dominantVibe: localBest.dominantVibe,
      personA: { id: localBest.personA.id, name: localBest.personA.name },
      personB: { id: localBest.personB.id, name: localBest.personB.name }
    };
    selectedCompatibilityMode = previousMode;
  }

  const renderPersistedLeaderboard = (items) => (items || []).slice(0, 10).map((pair, index) => `
    <div class="match-row ${index === 0 ? 'best-match' : ''}">
      <strong>${index === 0 ? 'Mejor match' : 'Match'}: ${pair.personA.name} + ${pair.personB.name}</strong>
      <span>${pair.score}%</span>
    </div>
  `).join('');

  resultTitle.textContent = message.title;
  resultCopy.textContent = `${getOnlineModeLabel(result?.mode || game?.mode)} online · ${best.personA.name} + ${best.personB.name} · ${message.type}`;
  resultValue.className = 'result-number compatibility-result';
  resultValue.textContent = `${best.score}%`;
  resultNote.innerHTML = `
    <div class="compat-result-stack">
      <section class="reading-card"><strong>Lectura del match online</strong><p>${message.reading}</p></section>
      <section class="match-board"><strong>Ranking de afinidad</strong>${renderPersistedLeaderboard(pairs)}</section>
      <section class="reading-card"><strong>Sala</strong><p>Código ${currentRoom.code}. Este resultado quedó sincronizado para todas las personas conectadas.</p></section>
    </div>
  `;
  lastShareText = `Resultado de TeLoAdivino ✨\n\nModo online: ${getOnlineModeLabel(result?.mode || game?.mode)}\nMejor match: ${best.personA.name} + ${best.personB.name}\nCompatibilidad mágica: ${best.score}%\nTipo de conexión: ${message.type}\n\n“${message.reading}”\n\nRanking:\n${(pairs || []).slice(0, 5).map((pair, index) => `${index + 1}. ${pair.personA.name} + ${pair.personB.name} — ${pair.score}%`).join('\n')}`;
  showScreen('resultScreen');
}


const bottleChallenges = {
  suave: [
    { type: 'Verdad', text: 'Cada persona dice una cosa buena de la otra.' },
    { type: 'Reto', text: 'Inventen un saludo secreto de 3 segundos.' },
    { type: 'Pregunta', text: '¿Qué plan simple harían juntos sin pensarlo mucho?' },
    { type: 'Reto', text: 'Hagan una pose dramática como portada de película.' },
    { type: 'Verdad', text: 'Digan qué primera impresión les dio la otra persona.' }
  ],
  fiesta: [
    { type: 'Verdad', text: 'El grupo vota: ¿quién de los dos sería peor guardando un secreto?' },
    { type: 'Reto', text: 'Ambos deben inventar un apodo para el otro por una ronda.' },
    { type: 'Reto', text: 'Hagan una mini escena de teleserie de 10 segundos.' },
    { type: 'Pregunta', text: '¿Quién de los dos sobreviviría mejor en un reality?' },
    { type: 'Reto', text: 'Elijan una canción que represente su dúo.' }
  ],
  coqueta: [
    { type: 'Coqueta', text: 'Mantengan la mirada 5 segundos o cambien por un cumplido sincero.' },
    { type: 'Coqueta', text: 'Cada persona dice una green flag de la otra.' },
    { type: 'Coqueta', text: 'Elijan una cita ideal que harían juntos.' },
    { type: 'Coqueta', text: 'Digan una frase coqueta sin reírse.' },
    { type: 'Coqueta', text: 'El grupo vota quién de los dos tiene más cara de mandar indirectas.' }
  ],
  atrevida: [
    { type: 'Atrevida', text: 'Mantengan la mirada 7 segundos o cambien por una pregunta atrevida.' },
    { type: 'Atrevida', text: 'Digan algo atractivo de la energía de la otra persona, sin ser explícitos.' },
    { type: 'Atrevida', text: 'Elijan: tensión lenta, directa, misteriosa o juguetona.' },
    { type: 'Atrevida', text: 'Susurra una frase misteriosa sin decir nada explícito, o cambia por una verdad.' },
    { type: 'Atrevida', text: 'El grupo vota si hay más química tierna, coqueta o intensa.' }
  ]
};

const bottlePhysicalChallenges = {
  coqueta: [
    { type: 'Piquito opcional', text: 'Si ambas personas quieren: dense un piquito. Si no, cambien por un cumplido mirando a los ojos.' },
    { type: 'Reto físico opcional', text: 'Si ambas personas quieren: tómense de las manos 5 segundos. Si no, respondan qué plan harían juntos.' }
  ],
  atrevida: [
    { type: 'Piquito opcional', text: 'Si ambas personas quieren: dense un piquito. Si no, elijan una pregunta atrevida verbal.' },
    { type: 'Reto físico opcional', text: 'Si ambas personas quieren: abrazo de 5 segundos. Si no, digan una green flag del otro.' }
  ]
};


function clampParticipantCount(value, min = 2, max = 30) {
  const number = Number.parseInt(value, 10);
  if (Number.isNaN(number)) return min;
  return Math.max(min, Math.min(max, number));
}

function syncCountInput(id, value) {
  const input = document.getElementById(id);
  if (input) input.value = String(value);
}

function applyCompatParticipantCount() {
  const input = document.getElementById('compatParticipantCountInput');
  compatParticipantCount = clampParticipantCount(input?.value, 2, 30);
  syncCountInput('compatParticipantCountInput', compatParticipantCount);
  initTheme();
renderParticipantNameInputs();
}

function applyVibeParticipantCount() {
  const input = document.getElementById('vibeParticipantCountInput');
  vibeParticipantCount = clampParticipantCount(input?.value, 1, 30);
  syncCountInput('vibeParticipantCountInput', vibeParticipantCount);
  renderVibeParticipantNameInputs();
}

function applyBottleParticipantCount() {
  collectBottleParticipantNames();
  const input = document.getElementById('bottleParticipantCountInput');
  bottleParticipantCount = clampParticipantCount(input?.value, 2, 30);
  syncCountInput('bottleParticipantCountInput', bottleParticipantCount);
  renderBottleParticipantNameInputs();
}

function applyTruthParticipantCount() {
  collectTruthParticipantNames();
  const input = document.getElementById('truthParticipantCountInput');
  truthParticipantCount = clampParticipantCount(input?.value, 2, 30);
  syncCountInput('truthParticipantCountInput', truthParticipantCount);
  renderTruthParticipantNameInputs();
}

function randomItem(items) { return items[Math.floor(Math.random() * items.length)]; }

function collectBottleParticipantNames() {
  const inputs = document.querySelectorAll('#bottleParticipantNames input');
  bottleParticipantList = Array.from(inputs).map((input, index) => input.value.trim() || `Persona ${index + 1}`);
}

function renderBottleParticipantNameInputs() {
  const container = document.getElementById('bottleParticipantNames');
  if (!container) return;
  const previous = bottleParticipantList || [];
  container.innerHTML = Array.from({ length: bottleParticipantCount }, (_, index) => {
    const value = previous[index] || `Persona ${index + 1}`;
    return `<label class="name-field"><span>Persona ${index + 1}</span><input type="text" maxlength="22" value="${value}"></label>`;
  }).join('');
  renderBottleWheel(bottleParticipantList, null, false);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
}

function getWheelSliceColor(index) {
  const palette = ['#f9a8d4','#f0abfc','#c4b5fd','#93c5fd','#99f6e4','#bbf7d0','#fde68a','#fdba74','#fca5a5','#ddd6fe'];
  return palette[index % palette.length];
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg - 90) * Math.PI / 180;
  return { x: cx + (r * Math.cos(rad)), y: cy + (r * Math.sin(rad)) };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
}

function renderBottleWheel(participants = bottleParticipantList, selectedName = null, animate = false) {
  const visual = document.getElementById('bottleVisual');
  if (!visual) return;
  const names = (participants || []).filter(Boolean);
  const count = Math.max(names.length, 2);
  if (!names.length) {
    visual.innerHTML = '<div class="empty-wheel">Agrega participantes</div>';
    return;
  }
  const slice = 360 / count;
  const slices = names.map((name, index) => {
    const start = index * slice;
    const end = start + slice;
    const mid = start + slice / 2;
    const textPoint = polarToCartesian(110, 110, 70, mid);
    const shortName = name.length > 12 ? `${name.slice(0, 11)}…` : name;
    return `<path d="${describeArc(110, 110, 104, start, end)}" fill="${getWheelSliceColor(index)}" stroke="rgba(255,255,255,.92)" stroke-width="2"></path><text x="${textPoint.x}" y="${textPoint.y}" transform="rotate(${mid} ${textPoint.x} ${textPoint.y})" text-anchor="middle" dominant-baseline="middle">${escapeHtml(shortName)}</text>`;
  }).join('');
  let wheelRotation = bottleWheelRotation;
  if (selectedName) {
    const selectedIndex = Math.max(0, names.indexOf(selectedName));
    const targetCenter = selectedIndex * slice + slice / 2;
    const extra = 1080 + Math.floor(Math.random() * 360);
    wheelRotation += extra + (360 - targetCenter);
    bottleWheelRotation = wheelRotation;
  }
  const animateClass = animate ? ' spinning' : '';
  visual.innerHTML = `<div class="roulette-pointer">▼</div><div class="roulette-wheel-wrap${animateClass}" style="transform: rotate(${wheelRotation}deg)"><svg class="roulette-wheel" viewBox="0 0 220 220" role="img" aria-label="Ruleta de participantes">${slices}<circle cx="110" cy="110" r="28" fill="rgba(255,255,255,.95)" stroke="rgba(190,24,93,.22)" stroke-width="2"></circle><text x="110" y="114" text-anchor="middle" class="wheel-center">🍾</text></svg></div>`;
}

function updateBottleStats(pair = null) {
  if (pair) pair.forEach(name => { bottleStats[name] = (bottleStats[name] || 0) + 1; });
  const statsEl = document.getElementById('bottleStats');
  if (!statsEl) return;
  const entries = Object.entries(bottleStats).sort((a,b) => b[1] - a[1]).slice(0, 6);
  statsEl.innerHTML = entries.length ? `<strong>Estadísticas de la noche</strong>${entries.map(([name, count]) => `<span>${escapeHtml(name)}: ${count} vez/veces elegido/a</span>`).join('')}` : '';
}

function getBottleChallenge(intensity = selectedBottleIntensity, allowPhysical = false) {
  const pool = [...(bottleChallenges[intensity] || bottleChallenges.suave)];
  if (allowPhysical && (intensity === 'coqueta' || intensity === 'atrevida')) {
    pool.push(...(bottlePhysicalChallenges[intensity] || []));
  }
  return randomItem(pool);
}

function pickTwoParticipants(list) {
  const safe = [...list].filter(Boolean);
  if (safe.length < 2) return null;
  const firstIndex = Math.floor(Math.random() * safe.length);
  let secondIndex = Math.floor(Math.random() * safe.length);
  while (secondIndex === firstIndex) secondIndex = Math.floor(Math.random() * safe.length);
  return [safe[firstIndex], safe[secondIndex]];
}

function startBottleGame() {
  unlockAchievement('bottle');
  collectBottleParticipantNames();
  bottleRounds = [];
  bottlePendingSelection = null;
  bottleStats = {};
  bottleWheelRotation = 0;
  selectedBottleIntensity = document.querySelector('.bottle-intensity-option.active')?.dataset.bottleIntensity || 'suave';
  showScreen('bottleGameScreen');
  renderBottleRound(null);
}

function pickOneParticipant(list, excludeName = '') {
  const safe = [...list].filter(Boolean).filter(name => name !== excludeName);
  if (!safe.length) return null;
  return safe[Math.floor(Math.random() * safe.length)];
}

function spinLocalBottle(replaceLast = false) {
  const selected = pickOneParticipant(bottleParticipantList, bottlePendingSelection || '');
  if (!selected) return;
  const event = { selected, createdAt: Date.now() };
  renderBottleWheel(bottleParticipantList, selected, true);

  if (!bottlePendingSelection || replaceLast) {
    bottlePendingSelection = selected;
    renderBottleSelection(event, false);
    return;
  }

  const pair = [bottlePendingSelection, selected];
  const challenge = getPiquitoChallenge();
  const round = { pair, challenge, intensity: selectedBottleIntensity, createdAt: Date.now() };
  bottleRounds.unshift(round);
  updateBottleStats(pair);
  bottlePendingSelection = null;
  renderBottleRound(round);
}

function getPiquitoChallenge() {
  return {
    type: 'Piquito',
    text: 'La ruleta decidió: estas dos personas deben darse un piquito. Regla básica: solo si ambas aceptan; si alguien no quiere, pueden cambiarlo por un cumplido mirando a los ojos o una verdad incómoda.'
  };
}

function renderBottleSelection(event, isSecond = false) {
  const visual = document.getElementById('bottleVisual');
  const pill = document.getElementById('bottlePill');
  const eyebrow = document.getElementById('bottleEyebrow');
  const title = document.getElementById('bottleTitle');
  const pairEl = document.getElementById('bottlePair');
  const challengeEl = document.getElementById('bottleChallenge');
  const log = document.getElementById('bottleLog');
  if (!visual || !pill || !eyebrow || !title || !pairEl || !challengeEl || !log) return;
  pill.textContent = `La Botellita · ${selectedBottleIntensity}`;
  eyebrow.textContent = 'Primera persona seleccionada';
  title.textContent = `${event.selected} salió primero`;
  pairEl.innerHTML = `<strong>${event.selected}</strong><span>+</span><strong>?</strong>`;
  challengeEl.innerHTML = '<strong>Falta una persona</strong><p>Gira la ruleta otra vez para elegir a la segunda persona.</p>';
  log.innerHTML = bottleRounds.slice(0, 5).map((item, index) => `<div><strong>${index + 1}. ${item.pair[0]} + ${item.pair[1]}</strong><small>${item.challenge.type}</small></div>`).join('');
  updateBottleStats();
}

function renderBottleRound(round) {
  const visual = document.getElementById('bottleVisual');
  const pill = document.getElementById('bottlePill');
  const eyebrow = document.getElementById('bottleEyebrow');
  const title = document.getElementById('bottleTitle');
  const pairEl = document.getElementById('bottlePair');
  const challengeEl = document.getElementById('bottleChallenge');
  const log = document.getElementById('bottleLog');
  if (!visual || !pill || !eyebrow || !title || !pairEl || !challengeEl || !log) return;
  pill.textContent = `La Botellita · ${selectedBottleIntensity}`;
  if (!round) {
    eyebrow.textContent = 'Ruleta de la botellita';
    title.textContent = 'Gira para elegir a la primera persona';
    pairEl.textContent = 'La primera vuelta elige una persona. La segunda vuelta elige a la otra.';
    challengeEl.textContent = 'Cuando salgan dos personas, la app dirá quiénes deben darse un piquito. Si alguien no quiere, se cambia por alternativa verbal.';
    log.innerHTML = '';
    updateBottleStats();
    renderBottleWheel(bottleParticipantList, null, false);
    return;
  }
  renderBottleWheel(bottleParticipantList, round.pair[1], true);
  eyebrow.textContent = round.challenge.type;
  title.textContent = 'La ruleta eligió a 2 personas';
  pairEl.innerHTML = `<strong>${round.pair[0]}</strong><span>+</span><strong>${round.pair[1]}</strong>`;
  challengeEl.innerHTML = `<strong>${round.challenge.type}</strong><p>${round.challenge.text}</p>`;
  log.innerHTML = bottleRounds.slice(0, 5).map((item, index) => `<div><strong>${index + 1}. ${item.pair[0]} + ${item.pair[1]}</strong><small>${item.challenge.type}</small></div>`).join('');
  updateBottleStats();
}

function getOnlineBottleConfig() {
  return {
    intensity: document.getElementById('onlineBottleIntensitySelect')?.value || 'suave',
    allowPhysical: document.getElementById('onlineBottlePhysicalToggle')?.checked || false
  };
}

async function startOnlineBottleGame() {
  if (!firebaseOnline || !currentRoom?.code) {
    alert('Firebase no está conectado. Recarga la página e intenta nuevamente.');
    return;
  }
  const activeParticipants = getActiveOnlineParticipants();
  if (activeParticipants.length < 2) {
    alert('Necesitas al menos 2 participantes conectados desde sus celulares.');
    return;
  }
  const ownId = getParticipantId();
  if (currentRoom.hostId && currentRoom.hostId !== ownId) {
    alert('Solo la persona anfitriona puede iniciar La Botellita.');
    return;
  }
  const config = getOnlineBottleConfig();
  lastRenderedBottleRoundKey = '';
  try {
    await getRoomRef(currentRoom.code).update({
      status: 'playing',
      updatedAt: Date.now(),
      game: {
        type: 'bottle',
        intensity: config.intensity,
        allowPhysical: config.allowPhysical,
        startedAt: Date.now(),
        pendingSelection: null,
        rounds: []
      }
    });
  } catch (error) {
    console.warn('No se pudo iniciar La Botellita:', error);
    alert('No se pudo iniciar La Botellita. Revisa la conexión o las reglas de Firebase.');
  }
}

function renderOnlineBottle(force = false) {
  const game = currentRoom?.game;
  if (!game || game.type !== 'bottle') return;
  const options = document.getElementById('onlineGameOptions');
  const dots = document.getElementById('onlineGameProgressDots');
  const pill = document.getElementById('onlineGamePill');
  const eyebrow = document.getElementById('onlineGameEyebrow');
  const title = document.getElementById('onlineGameTitle');
  const help = document.getElementById('onlineGameHelp');
  if (!options || !dots || !pill || !eyebrow || !title || !help) return;
  const rounds = Array.isArray(game.rounds) ? game.rounds : [];
  const latest = rounds[rounds.length - 1] || null;
  const pending = game.pendingSelection || null;
  const ownId = getParticipantId();
  const isHost = !currentRoom?.hostId || currentRoom.hostId === ownId;
  const key = `${currentRoom.code}:${game.startedAt}:${latest?.createdAt || 'empty'}:${pending?.createdAt || 'nopending'}:${rounds.length}`;
  if (!force && lastRenderedBottleRoundKey === key && document.getElementById('onlineGameScreen')?.classList.contains('active')) return;
  lastRenderedBottleRoundKey = key;
  showScreen('onlineGameScreen');
  updateOnlineGameActions();
  pill.textContent = `La Botellita · ${currentRoom.code}`;
  eyebrow.textContent = latest ? latest.challenge.type : pending ? 'Primera persona seleccionada' : `Modo ${game.intensity || 'suave'}`;
  title.textContent = latest ? 'La ruleta eligió a 2 personas' : pending ? `${pending.name} salió primero` : 'Esperando primer giro';
  help.textContent = 'La ruleta elige primero a una persona y luego a otra. Cuando salgan dos, aparecerá el piquito. Nadie está obligado: siempre pueden cambiarlo por una alternativa verbal.';
  let selectionHtml = '';
  if (latest) {
    selectionHtml = `<div class="bottle-pair online"><strong>${latest.pair[0].name}</strong><span>+</span><strong>${latest.pair[1].name}</strong></div>`;
  } else if (pending) {
    selectionHtml = `<div class="bottle-pair online"><strong>${pending.name}</strong><span>+</span><strong>?</strong></div>`;
  } else {
    selectionHtml = '<div class="online-wait-card"><strong>El anfitrión debe girar la ruleta.</strong></div>';
  }
  const challengeHtml = latest ? `<div class="bottle-card"><strong>${latest.challenge.type}</strong><p>${latest.challenge.text}</p></div>` : pending ? '<div class="bottle-card"><strong>Falta una persona</strong><p>Gira la ruleta otra vez para elegir a la segunda persona.</p></div>' : '';
  const spinLabel = pending ? 'Girar segunda persona' : 'Girar primera persona';
  const spinButton = isHost ? `<button class="primary-button" id="spinOnlineBottleBtn">${spinLabel}</button><button class="secondary-button" id="changeOnlineBottleBtn">Reiniciar selección</button>` : '<div class="online-wait-card"><strong>Espera a que el anfitrión gire.</strong></div>';
  const logHtml = rounds.length ? `<div class="bottle-log">${rounds.slice(-5).reverse().map((round, index) => `<div><strong>${index + 1}. ${round.pair[0].name} + ${round.pair[1].name}</strong><small>${round.challenge.type}</small></div>`).join('')}</div>` : '';
  options.innerHTML = `${selectionHtml}${challengeHtml}<div class="bottle-actions">${spinButton}</div>${logHtml}`;
  dots.innerHTML = '';
  document.getElementById('spinOnlineBottleBtn')?.addEventListener('click', () => spinOnlineBottle(false));
  document.getElementById('changeOnlineBottleBtn')?.addEventListener('click', () => resetOnlineBottleSelection());
}

async function resetOnlineBottleSelection() {
  if (!firebaseOnline || !currentRoom?.code || currentRoom.game?.type !== 'bottle') return;
  try {
    await getRoomRef(currentRoom.code).child('game/pendingSelection').set(null);
  } catch (error) {
    console.warn('No se pudo reiniciar la selección:', error);
  }
}

function pickOneOnlineParticipant(list, excludeId = '') {
  const safe = [...list].filter(Boolean).filter(person => person.id !== excludeId);
  if (!safe.length) return null;
  return safe[Math.floor(Math.random() * safe.length)];
}

async function spinOnlineBottle() {
  if (!firebaseOnline || !currentRoom?.code || currentRoom.game?.type !== 'bottle') return;
  const activeParticipants = getActiveOnlineParticipants();
  const game = currentRoom.game;
  const pending = game.pendingSelection || null;
  const selected = pickOneOnlineParticipant(activeParticipants, pending?.id || '');
  if (!selected) return;

  try {
    if (!pending) {
      await getRoomRef(currentRoom.code).child('game/pendingSelection').set({ id: selected.id, name: selected.name, createdAt: Date.now() });
      return;
    }

    const challenge = getPiquitoChallenge();
    const round = {
      pair: [{ id: pending.id, name: pending.name }, { id: selected.id, name: selected.name }],
      challenge,
      intensity: game.intensity || 'suave',
      createdAt: Date.now()
    };
    const currentRounds = Array.isArray(game.rounds) ? [...game.rounds] : [];
    currentRounds.push(round);
    await getRoomRef(currentRoom.code).child('game').update({
      pendingSelection: null,
      rounds: currentRounds.slice(-30)
    });
  } catch (error) {
    console.warn('No se pudo girar la ruleta:', error);
    alert('No se pudo girar. Revisa la conexión.');
  }
}



const pairQuestionSets = {
  dulce: [
    { q: '¿Qué plan elegiría para una tarde perfecta?', options: ['Café y conversación', 'Película en casa', 'Paseo sin rumbo', 'Comida rica'] },
    { q: '¿Qué detalle le haría más feliz?', options: ['Una nota bonita', 'Un abrazo largo', 'Una sorpresa simple', 'Que recuerden algo importante'] },
    { q: '¿Qué canción pondría para una cita?', options: ['Algo romántico', 'Algo nostálgico', 'Algo bailable', 'Algo tranquilo'] },
    { q: '¿Qué elegiría para relajarse?', options: ['Dormir', 'Ver una serie', 'Salir a caminar', 'Escuchar música'] },
    { q: '¿Qué gesto valora más?', options: ['Escucha real', 'Paciencia', 'Humor', 'Cariño claro'] },
    { q: '¿Qué comida elegiría para compartir?', options: ['Pizza', 'Sushi', 'Hamburguesa', 'Algo dulce'] },
    { q: '¿Qué tipo de mensaje le gusta más?', options: ['Tierno', 'Gracioso', 'Directo', 'Inesperado'] },
    { q: '¿Qué plan repetiría sin dudar?', options: ['Mirador', 'Cine', 'Cena', 'Viaje corto'] },
    { q: '¿Qué le da más tranquilidad?', options: ['Claridad', 'Rutina bonita', 'Tiempo juntos', 'Espacio personal'] },
    { q: '¿Qué le parece más romántico?', options: ['Una carta', 'Una canción', 'Una salida sorpresa', 'Un gesto cotidiano'] }
  ],
  profundo: [
    { q: '¿Qué necesita para sentirse en confianza?', options: ['Tiempo', 'Honestidad', 'Cuidado', 'Comunicación clara'] },
    { q: '¿Qué le cuesta más expresar?', options: ['Lo que siente', 'Lo que necesita', 'Sus miedos', 'Sus límites'] },
    { q: '¿Qué tipo de apoyo prefiere?', options: ['Consejo directo', 'Acompañamiento', 'Cariño', 'Soluciones concretas'] },
    { q: '¿Qué le da más paz en una relación?', options: ['Estabilidad', 'Libertad', 'Lealtad', 'Conversación'] },
    { q: '¿Qué conversación no evitaría?', options: ['Expectativas', 'Límites', 'Miedos', 'Planes futuros'] },
    { q: '¿Qué valora más cuando hay conflicto?', options: ['Calma', 'Escucha', 'Disculpas reales', 'Resolver rápido'] },
    { q: '¿Qué le hace abrirse emocionalmente?', options: ['Paciencia', 'Coherencia', 'Ternura', 'Seguridad'] },
    { q: '¿Qué vínculo busca construir?', options: ['Honesto', 'Tranquilo', 'Intenso', 'Comprometido'] },
    { q: '¿Qué herida cuidaría más?', options: ['Desconfianza', 'Abandono', 'Inseguridad', 'Decepción'] },
    { q: '¿Qué promesa pesa más?', options: ['Estar presente', 'Decir la verdad', 'Cuidar el vínculo', 'Respetar tiempos'] }
  ],
  coqueta: [
    { q: '¿Qué indirecta usaría primero?', options: ['Un meme', 'Una canción', 'Un “me acordé de ti”', 'Una invitación'] },
    { q: '¿Qué le parece más coqueto?', options: ['La mirada', 'La risa', 'La atención', 'La seguridad'] },
    { q: '¿Qué plan elegiría para subir la tensión?', options: ['Mirador de noche', 'Película en casa', 'Karaoke', 'Cena con luz baja'] },
    { q: '¿Qué frase le dejaría pensando?', options: ['“Tienes algo”', '“Quédate un rato”', '“Me gusta tu energía”', '“Quiero verte”'] },
    { q: '¿Qué delata que le gusta alguien?', options: ['Se ríe más', 'Se pone nervioso/a', 'Se acerca más', 'Se hace el/la interesante'] },
    { q: '¿Qué tipo de coqueteo prefiere?', options: ['Sutil', 'Divertido', 'Directo', 'Misterioso'] },
    { q: '¿Qué gesto le parece más atractivo?', options: ['Contacto visual', 'Un cumplido', 'Cercanía', 'Humor con picardía'] },
    { q: '¿Qué final de cita elegiría?', options: ['Abrazo largo', 'Mensaje al llegar', 'Próxima invitación', 'Mirada incómoda bonita'] },
    { q: '¿Qué le gusta que le digan?', options: ['Algo tierno', 'Algo gracioso', 'Algo directo', 'Algo insinuado'] },
    { q: '¿Qué energía le atrae más?', options: ['Dulce', 'Segura', 'Misteriosa', 'Atrevida'] }
  ]
};

function shuffleCopy(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function collectPairNames() {
  const a = document.getElementById('pairNameA')?.value.trim() || 'Persona 1';
  const b = document.getElementById('pairNameB')?.value.trim() || 'Persona 2';
  pairPlayers = [a, b];
}

function startPairGame() {
  collectPairNames();
  pairMode = document.querySelector('.pair-mode-option.active')?.dataset.pairMode || 'dulce';
  activePairQuestions = shuffleCopy(pairQuestionSets[pairMode] || pairQuestionSets.dulce).slice(0, 8);
  pairRoundIndex = 0;
  pairPhase = 'guess';
  pairGuesserIndex = 0;
  pairGuess = null;
  pairScore = 0;
  pairRounds = [];
  unlockAchievement('pair');
  showScreen('pairGameScreen');
  renderPairGame();
}

function renderPairGame() {
  const question = activePairQuestions[pairRoundIndex];
  const totalRounds = activePairQuestions.length;
  const guesser = pairPlayers[pairGuesserIndex];
  const target = pairPlayers[1 - pairGuesserIndex];
  const pill = document.getElementById('pairPill');
  const eyebrow = document.getElementById('pairEyebrow');
  const title = document.getElementById('pairTitle');
  const help = document.getElementById('pairHelp');
  const grid = document.getElementById('pairOptions');
  const feedback = document.getElementById('pairFeedback');
  const stats = document.getElementById('pairStats');
  if (!question || !pill || !eyebrow || !title || !help || !grid || !feedback || !stats) return;
  pill.textContent = `Ronda ${pairRoundIndex + 1} de ${totalRounds}`;
  eyebrow.textContent = pairPhase === 'guess' ? `Turno de ${guesser}` : `Respuesta real de ${target}`;
  title.textContent = question.q;
  help.innerHTML = pairPhase === 'guess'
    ? `<strong>${guesser}</strong>, intenta adivinar qué respondería <strong>${target}</strong>. ${target} no debe mirar.`
    : `<strong>${target}</strong>, ahora marca tu respuesta real. Luego veremos si ${guesser} acertó.`;
  grid.innerHTML = question.options.map((option, index) => `<button class="likely-vote-btn pair-option-btn" data-index="${index}">${escapeHtml(option)}</button>`).join('');
  grid.querySelectorAll('.pair-option-btn').forEach(button => button.addEventListener('click', () => choosePairOption(Number(button.dataset.index))));
  feedback.innerHTML = pairPhase === 'guess' ? 'Primero va la predicción. Después se compara con la respuesta real.' : `Predicción guardada: <strong>${escapeHtml(question.options[pairGuess])}</strong>`;
  stats.innerHTML = `<div><strong>Puntaje actual</strong><span>${pairScore}/${pairRoundIndex}</span></div><div><strong>Modo</strong><span>${pairModeLabel(pairMode)}</span></div>`;
}

function choosePairOption(index) {
  const question = activePairQuestions[pairRoundIndex];
  const guesser = pairPlayers[pairGuesserIndex];
  const target = pairPlayers[1 - pairGuesserIndex];
  if (pairPhase === 'guess') {
    pairGuess = index;
    pairPhase = 'real';
    renderPairGame();
    return;
  }
  const hit = pairGuess === index;
  if (hit) pairScore += 1;
  pairRounds.push({ question: question.q, guesser, target, guess: question.options[pairGuess], real: question.options[index], hit });
  showPairRoundResult(hit);
}

function showPairRoundResult(hit) {
  const feedback = document.getElementById('pairFeedback');
  const grid = document.getElementById('pairOptions');
  const question = activePairQuestions[pairRoundIndex];
  const target = pairPlayers[1 - pairGuesserIndex];
  if (!feedback || !grid || !question) return;
  grid.innerHTML = '';
  feedback.innerHTML = `<div class="pair-round-result ${hit ? 'hit' : 'miss'}"><strong>${hit ? 'Acertaron' : 'No coincidieron'}</strong><p>${target} respondió: ${escapeHtml(pairRounds[pairRounds.length - 1].real)}</p></div><button class="primary-button" id="nextPairRoundBtn">${pairRoundIndex + 1 >= activePairQuestions.length ? 'Ver resultado final' : 'Siguiente ronda'}</button>`;
  document.getElementById('nextPairRoundBtn')?.addEventListener('click', nextPairRound);
}

function nextPairRound() {
  pairRoundIndex += 1;
  pairGuesserIndex = 1 - pairGuesserIndex;
  pairPhase = 'guess';
  pairGuess = null;
  if (pairRoundIndex >= activePairQuestions.length) {
    renderPairFinal();
    return;
  }
  renderPairGame();
}

function pairModeLabel(mode) {
  return { dulce: 'Dulce', profundo: 'Profundo', coqueta: 'Coqueta' }[mode] || 'Dulce';
}

function renderPairFinal() {
  const totalRounds = activePairQuestions.length || 1;
  const pct = Math.round((pairScore / totalRounds) * 100);
  const title = document.getElementById('pairTitle');
  const eyebrow = document.getElementById('pairEyebrow');
  const help = document.getElementById('pairHelp');
  const grid = document.getElementById('pairOptions');
  const feedback = document.getElementById('pairFeedback');
  const stats = document.getElementById('pairStats');
  if (!title || !eyebrow || !help || !grid || !feedback || !stats) return;
  eyebrow.textContent = 'Resultado de pareja';
  title.textContent = `${pairPlayers[0]} + ${pairPlayers[1]}`;
  help.innerHTML = `Puntaje final: <strong>${pairScore}/${totalRounds}</strong> · ${pct}% de conocimiento mutuo.`;
  grid.innerHTML = '';
  const label = pct >= 85 ? 'Se conocen demasiado' : pct >= 65 ? 'Muy buena conexión' : pct >= 45 ? 'Todavía hay misterio' : 'Match con tarea pendiente';
  const text = pct >= 85
    ? 'Hay detalles, gustos y señales que leen muy bien. Esto tiene vibra de complicidad real.'
    : pct >= 65
      ? 'Se conocen bastante, pero todavía quedan cosas entretenidas por descubrir.'
      : pct >= 45
        ? 'Hay conexión, pero también varias sorpresas. Eso puede hacerlo más interesante.'
        : 'No acertaron tanto, pero al menos ya tienen temas para conversar y reírse.';
  feedback.innerHTML = `<div class="pair-final-card"><strong>${label}</strong><p>${text}</p><button class="primary-button" id="restartPairBtn">Jugar otra vez</button><button class="secondary-button" id="sharePairBtn">Compartir resultado</button></div>`;
  stats.innerHTML = pairRounds.map((round, index) => `<div><strong>${index + 1}. ${escapeHtml(round.target)}</strong><span>${round.hit ? '✓' : '×'} ${escapeHtml(round.real)}</span></div>`).join('');
  document.getElementById('restartPairBtn')?.addEventListener('click', startPairGame);
  document.getElementById('sharePairBtn')?.addEventListener('click', sharePairResult);
}

function sharePairResult() {
  const totalRounds = activePairQuestions.length || 1;
  const pct = Math.round((pairScore / totalRounds) * 100);
  const text = `❤️ TeLoAdivino · Modo Parejas\n\n${pairPlayers[0]} + ${pairPlayers[1]}\n${pct}% · ${pairScore}/${totalRounds} aciertos\n\n¿Qué tanto se conocen? ✨`;
  if (navigator.share) {
    navigator.share({ text }).catch(() => copyText(text));
  } else {
    copyText(text);
  }
}


const likelyQuestions = [
  '¿Quién es más probable que se enamore primero?',
  '¿Quién llegaría tarde a una cita importante?',
  '¿Quién respondería un mensaje en 3 segundos?',
  '¿Quién mandaría una indirecta por Instagram?',
  '¿Quién sobreviviría mejor a un apocalipsis?',
  '¿Quién sería influencer sin querer?',
  '¿Quién se reiría en el peor momento?',
  '¿Quién daría el primer paso si le gusta alguien?',
  '¿Quién tendría una cita de película?',
  '¿Quién se haría el/la interesante?',
  '¿Quién guarda mejor un secreto?',
  '¿Quién sería protagonista de una comedia romántica?',
  '¿Quién tiene más vibra misteriosa?',
  '¿Quién se pondría más nervioso/a con su crush?',
  '¿Quién organizaría la mejor fiesta?',
  '¿Quién terminaría dando el mejor consejo amoroso?',
  '¿Quién tendría más posibilidades de volverse famoso/a?',
  '¿Quién se acordaría de todos los detalles?',
  '¿Quién diría “yo no fui” aunque sí fue?',
  '¿Quién tendría el match más inesperado de la noche?'
];

function collectLikelyParticipantNames() {
  const inputs = document.querySelectorAll('#likelyParticipantNames input');
  likelyParticipantList = Array.from(inputs).map((input, index) => input.value.trim() || `Persona ${index + 1}`);
}

function renderLikelyParticipantNameInputs() {
  const container = document.getElementById('likelyParticipantNames');
  if (!container) return;
  const previous = likelyParticipantList || [];
  container.innerHTML = Array.from({ length: likelyParticipantCount }, (_, index) => {
    const value = previous[index] || `Persona ${index + 1}`;
    return `<label>Persona ${index + 1}<input type="text" value="${escapeHtml(value)}" placeholder="Nombre"></label>`;
  }).join('');
}

function applyLikelyParticipantCount() {
  collectLikelyParticipantNames();
  const input = document.getElementById('likelyParticipantCountInput');
  const value = Math.max(3, Math.min(30, Number(input?.value || 3)));
  likelyParticipantCount = value;
  if (input) input.value = value;
  renderLikelyParticipantNameInputs();
}

function startLikelyGame() {
  unlockAchievement('likely');
  collectLikelyParticipantNames();
  likelyParticipantList = likelyParticipantList.filter(Boolean);
  if (likelyParticipantList.length < 3) {
    alert('Necesitas al menos 3 participantes para este juego.');
    return;
  }
  likelyQuestionIndex = Math.floor(Math.random() * likelyQuestions.length);
  likelyRounds = [];
  likelyStats = {};
  likelyParticipantList.forEach(name => likelyStats[name] = 0);
  showScreen('likelyGameScreen');
  renderLikelyQuestion();
}

function renderLikelyQuestion() {
  const questionEl = document.getElementById('likelyQuestion');
  const grid = document.getElementById('likelyVoteGrid');
  const results = document.getElementById('likelyResults');
  if (!questionEl || !grid || !results) return;
  const question = likelyQuestions[likelyQuestionIndex % likelyQuestions.length];
  questionEl.textContent = question;
  grid.innerHTML = likelyParticipantList.map(name => `<button class="likely-vote-btn" data-name="${escapeHtml(name)}">${escapeHtml(name)}</button>`).join('');
  grid.querySelectorAll('.likely-vote-btn').forEach(button => {
    button.addEventListener('click', () => voteLikely(button.dataset.name));
  });
  renderLikelyResults();
}

function voteLikely(name) {
  if (!name) return;
  likelyStats[name] = (likelyStats[name] || 0) + 1;
  const currentRound = likelyRounds[0];
  const question = likelyQuestions[likelyQuestionIndex % likelyQuestions.length];
  if (!currentRound || currentRound.question !== question) {
    likelyRounds.unshift({ question, votes: { [name]: 1 } });
  } else {
    currentRound.votes[name] = (currentRound.votes[name] || 0) + 1;
  }
  renderLikelyResults();
}

function nextLikelyQuestion() {
  likelyQuestionIndex = (likelyQuestionIndex + 1 + Math.floor(Math.random() * 4)) % likelyQuestions.length;
  renderLikelyQuestion();
}

function renderLikelyResults() {
  const results = document.getElementById('likelyResults');
  const statsEl = document.getElementById('likelyStats');
  if (!results || !statsEl) return;
  const question = likelyQuestions[likelyQuestionIndex % likelyQuestions.length];
  const current = likelyRounds.find(round => round.question === question);
  const roundVotes = current?.votes || {};
  const roundEntries = Object.entries(roundVotes).sort((a,b) => b[1] - a[1]);
  const totalRoundVotes = roundEntries.reduce((sum, [,votes]) => sum + votes, 0);
  if (!roundEntries.length) {
    results.innerHTML = '<div class="online-wait-card"><strong>Aún no hay votos en esta ronda.</strong><span>Presiona el nombre de una persona para votar.</span></div>';
  } else {
    results.innerHTML = `<h3>Resultado de la ronda</h3>${roundEntries.map(([name, votes]) => {
      const pct = totalRoundVotes ? Math.round((votes / totalRoundVotes) * 100) : 0;
      return `<div class="likely-bar"><strong>${escapeHtml(name)}</strong><span><i style="width:${pct}%"></i></span><em>${votes} voto${votes === 1 ? '' : 's'}</em></div>`;
    }).join('')}`;
  }
  const globalEntries = Object.entries(likelyStats).sort((a,b) => b[1] - a[1]).slice(0, 8);
  statsEl.innerHTML = globalEntries.length ? `<h3>Ranking de la noche</h3>${globalEntries.map(([name, votes], index) => `<div><strong>${index + 1}. ${escapeHtml(name)}</strong><span>${votes} voto${votes === 1 ? '' : 's'} acumulado${votes === 1 ? '' : 's'}</span></div>`).join('')}` : '';
}

function shareLikelyRanking() {
  unlockAchievement('share');
  const entries = Object.entries(likelyStats).sort((a,b) => b[1] - a[1]);
  if (!entries.length || entries.every(([,votes]) => votes === 0)) {
    alert('Aún no hay votos para compartir.');
    return;
  }
  const text = `🏆 TeLoAdivino · ¿Quién es más probable?\n\nRanking de la noche:\n${entries.slice(0, 10).map(([name, votes], index) => `${index + 1}. ${name} — ${votes} voto${votes === 1 ? '' : 's'}`).join('\n')}\n\nJuega en TeLoAdivino ✨`;
  lastShareText = text;
  if (navigator.share) {
    navigator.share({ text }).catch(() => {});
  } else {
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }
}

const truthCards = {
  suave: {
    verdad: [
      '¿Cuál fue tu momento más vergonzoso esta semana?',
      '¿Qué canción te da vergüenza admitir que te gusta?',
      '¿Cuál es una manía tuya?',
      '¿Qué cosa simple te pone de buen humor?',
      '¿Qué app usas más de lo que deberías?',
      '¿Cuál fue la última mentira piadosa que dijiste?'
    ],
    reto: [
      'Haz una pose dramática por 5 segundos.',
      'Imita a alguien famoso.',
      'Di una frase como si estuvieras en una teleserie.',
      'Haz un cumplido sincero a alguien del grupo.',
      'Habla con voz de narrador hasta tu próximo turno.',
      'El grupo te pone un apodo por una ronda.'
    ]
  },
  fiesta: {
    verdad: [
      '¿Quién del grupo sería peor guardando un secreto?',
      '¿Quién sobreviviría mejor en un reality?',
      '¿Qué plan jamás rechazarías?',
      '¿Quién del grupo tiene más energía de protagonista?',
      '¿Cuál fue tu peor excusa para no salir?',
      '¿Quién del grupo sería más famoso en TikTok?'
    ],
    reto: [
      'Habla con acento falso hasta tu próximo turno.',
      'Elige a alguien y hagan una pose de portada de disco.',
      'Cuenta una historia inventada y que el grupo adivine si es falsa.',
      'Haz una mini escena de teleserie de 10 segundos.',
      'Inventa un apodo para la persona de tu derecha.',
      'Haz una celebración exagerada como si ganaras un premio.'
    ]
  },
  coqueta: {
    verdad: [
      '¿Qué te parece más atractivo en alguien?',
      '¿Cuál es tu forma favorita de coquetear?',
      '¿Qué indirecta usarías si te gusta alguien?',
      '¿Qué cita ideal elegirías?',
      '¿Qué señal te hace pensar que hay onda?',
      '¿Qué mensaje coqueto te gustaría recibir?'
    ],
    reto: [
      'Dile una green flag a alguien del grupo.',
      'Mantén la mirada con alguien por 5 segundos.',
      'Dedica una canción a alguien del grupo.',
      'Di una frase coqueta sin reírte.',
      'Elige a alguien y dile qué vibra tiene.',
      'Dile un cumplido sutil a la persona que elijas.'
    ]
  },
  atrevida: {
    verdad: [
      '¿Qué tipo de tensión te gusta más?',
      '¿Qué gesto te parece más seductor?',
      '¿Qué ambiente te parece más atractivo?',
      '¿Qué frase te dejaría pensando?',
      '¿Qué te parece más irresistible: confianza, humor, misterio o cercanía?',
      '¿Qué plan tiene más vibra atrevida para ti?'
    ],
    reto: [
      'Di algo atractivo de una persona del grupo, sin hacerlo incómodo.',
      'Haz contacto visual con alguien por 7 segundos.',
      'Susurra una frase misteriosa sin decir nada explícito.',
      'Elige a alguien y dile: “tienes una vibra interesante”.',
      'Dile a alguien qué energía transmite en una palabra.',
      'Elige a alguien y hagan una mirada de película por 5 segundos.'
    ]
  }
};

function collectTruthParticipantNames() {
  const inputs = document.querySelectorAll('#truthParticipantNames input');
  truthParticipantList = Array.from(inputs).map((input, index) => input.value.trim() || `Persona ${index + 1}`);
}

function renderTruthParticipantNameInputs() {
  const container = document.getElementById('truthParticipantNames');
  if (!container) return;
  const previous = truthParticipantList || [];
  container.innerHTML = Array.from({ length: truthParticipantCount }, (_, index) => {
    const value = previous[index] || `Persona ${index + 1}`;
    return `<label class="name-field"><span>Persona ${index + 1}</span><input type="text" maxlength="22" value="${value}"></label>`;
  }).join('');
}

function updateTruthStats(round = null) {
  if (round?.player) {
    const current = truthStats[round.player] || { total: 0, verdad: 0, reto: 0 };
    current.total += 1;
    current[round.card.kind] = (current[round.card.kind] || 0) + 1;
    truthStats[round.player] = current;
  }
  const statsEl = document.getElementById('truthStats');
  if (!statsEl) return;
  const entries = Object.entries(truthStats).sort((a,b) => b[1].total - a[1].total).slice(0, 6);
  statsEl.innerHTML = entries.length ? `<strong>Estadísticas de la noche</strong>${entries.map(([name, stat]) => `<span>${escapeHtml(name)}: ${stat.total} turno(s), ${stat.verdad || 0} verdad(es), ${stat.reto || 0} reto(s)</span>`).join('')}` : '';
}

function getTruthCard(kind, intensity = selectedTruthIntensity) {
  const set = truthCards[intensity] || truthCards.suave;
  const finalKind = kind === 'random' ? (Math.random() > 0.5 ? 'verdad' : 'reto') : kind;
  const list = set[finalKind] || set.verdad;
  return { kind: finalKind, text: randomItem(list) };
}

function startTruthGame() {
  unlockAchievement('truth');
  collectTruthParticipantNames();
  truthRounds = [];
  truthStats = {};
  selectedTruthIntensity = document.querySelector('.truth-intensity-option.active')?.dataset.truthIntensity || 'suave';
  showScreen('truthGameScreen');
  renderTruthRound(null);
}

function playTruthTurn(kind = 'random') {
  collectTruthParticipantNames();
  const player = randomItem(truthParticipantList.filter(Boolean));
  const card = getTruthCard(kind);
  const round = { player, card, intensity: selectedTruthIntensity, createdAt: Date.now() };
  truthRounds.unshift(round);
  updateTruthStats(round);
  renderTruthRound(round);
}

function renderTruthRound(round) {
  const visual = document.getElementById('truthVisual');
  const pill = document.getElementById('truthPill');
  const eyebrow = document.getElementById('truthEyebrow');
  const title = document.getElementById('truthTitle');
  const playerEl = document.getElementById('truthPlayer');
  const challengeEl = document.getElementById('truthChallenge');
  const log = document.getElementById('truthLog');
  if (!visual || !pill || !eyebrow || !title || !playerEl || !challengeEl || !log) return;
  pill.textContent = `Verdad o Reto · ${selectedTruthIntensity}`;
  if (!round) {
    eyebrow.textContent = 'Turno aleatorio';
    title.textContent = '¿Quién juega?';
    playerEl.textContent = 'Presiona Verdad, Reto o Aleatorio para seleccionar a alguien.';
    challengeEl.textContent = 'La app elegirá una persona y mostrará una verdad o un reto según el botón elegido.';
    log.innerHTML = '';
    updateBottleStats();
    renderBottleWheel(bottleParticipantList, null, false);
    return;
  }
  visual.classList.remove('spin');
  void visual.offsetWidth;
  visual.classList.add('spin');
  const label = round.card.kind === 'verdad' ? 'Verdad' : 'Reto';
  eyebrow.textContent = label;
  title.textContent = `Turno de ${round.player}`;
  playerEl.innerHTML = `<strong>${round.player}</strong>`;
  challengeEl.innerHTML = `<strong>🃏 ${label}</strong><p>${round.card.text}</p><small>Siempre se puede pasar o pedir otra carta si alguien no se siente cómodo.</small>`;
  log.innerHTML = truthRounds.slice(0, 6).map((item, index) => `<div><strong>${index + 1}. ${item.player}</strong><small>${item.card.kind === 'verdad' ? 'Verdad' : 'Reto'}</small></div>`).join('');
}

function getOnlineTruthConfig() {
  return { intensity: document.getElementById('onlineBottleIntensitySelect')?.value || 'suave' };
}

async function startOnlineTruthGame() {
  if (!firebaseOnline || !currentRoom?.code) {
    alert('Firebase no está conectado. Recarga la página e intenta nuevamente.');
    return;
  }
  const activeParticipants = getActiveOnlineParticipants();
  if (activeParticipants.length < 2) {
    alert('Necesitas al menos 2 participantes conectados desde sus celulares.');
    return;
  }
  const ownId = getParticipantId();
  if (currentRoom.hostId && currentRoom.hostId !== ownId) {
    alert('Solo la persona anfitriona puede iniciar Verdad o Reto.');
    return;
  }
  const config = getOnlineTruthConfig();
  lastRenderedTruthRoundKey = '';
  try {
    await getRoomRef(currentRoom.code).update({
      status: 'playing',
      updatedAt: Date.now(),
      game: { type: 'truth', intensity: config.intensity, startedAt: Date.now(), rounds: [] }
    });
  } catch (error) {
    console.warn('No se pudo iniciar Verdad o Reto:', error);
    alert('No se pudo iniciar Verdad o Reto. Revisa la conexión o las reglas de Firebase.');
  }
}

function renderOnlineTruth(force = false) {
  const game = currentRoom?.game;
  if (!game || game.type !== 'truth') return;
  const options = document.getElementById('onlineGameOptions');
  const dots = document.getElementById('onlineGameProgressDots');
  const pill = document.getElementById('onlineGamePill');
  const eyebrow = document.getElementById('onlineGameEyebrow');
  const title = document.getElementById('onlineGameTitle');
  const help = document.getElementById('onlineGameHelp');
  if (!options || !dots || !pill || !eyebrow || !title || !help) return;
  const rounds = Array.isArray(game.rounds) ? game.rounds : [];
  const latest = rounds[rounds.length - 1] || null;
  const ownId = getParticipantId();
  const isHost = !currentRoom?.hostId || currentRoom.hostId === ownId;
  const key = `${currentRoom.code}:${game.startedAt}:${latest?.createdAt || 'empty'}:${rounds.length}`;
  if (!force && lastRenderedTruthRoundKey === key && document.getElementById('onlineGameScreen')?.classList.contains('active')) return;
  lastRenderedTruthRoundKey = key;
  showScreen('onlineGameScreen');
  updateOnlineGameActions();
  pill.textContent = `Verdad o Reto · ${currentRoom.code}`;
  eyebrow.textContent = latest ? (latest.card.kind === 'verdad' ? 'Verdad' : 'Reto') : `Modo ${game.intensity || 'suave'}`;
  title.textContent = latest ? `Turno de ${latest.player.name}` : 'Esperando turno';
  help.textContent = 'El anfitrión puede elegir Verdad, Reto o Aleatorio. Todas las personas verán la carta.';
  const latestHtml = latest ? `<div class="bottle-pair online"><strong>${latest.player.name}</strong></div><div class="bottle-card"><strong>${latest.card.kind === 'verdad' ? 'Verdad' : 'Reto'}</strong><p>${latest.card.text}</p><small>Siempre se puede pasar o pedir otra carta si alguien no se siente cómodo.</small></div>` : '<div class="online-wait-card"><strong>El anfitrión debe iniciar el primer turno.</strong></div>';
  const actions = isHost ? `<button class="primary-button" id="onlineTruthTruthBtn">Verdad</button><button class="primary-button" id="onlineTruthDareBtn">Reto</button><button class="secondary-button" id="onlineTruthRandomBtn">Aleatorio</button>` : '<div class="online-wait-card"><strong>Espera a que el anfitrión saque una carta.</strong></div>';
  const logHtml = rounds.length ? `<div class="bottle-log">${rounds.slice(-6).reverse().map((round, index) => `<div><strong>${index + 1}. ${round.player.name}</strong><small>${round.card.kind === 'verdad' ? 'Verdad' : 'Reto'}</small></div>`).join('')}</div>` : '';
  options.innerHTML = `${latestHtml}<div class="bottle-actions">${actions}</div>${logHtml}`;
  dots.innerHTML = '';
  document.getElementById('onlineTruthTruthBtn')?.addEventListener('click', () => playOnlineTruthTurn('verdad'));
  document.getElementById('onlineTruthDareBtn')?.addEventListener('click', () => playOnlineTruthTurn('reto'));
  document.getElementById('onlineTruthRandomBtn')?.addEventListener('click', () => playOnlineTruthTurn('random'));
}

async function playOnlineTruthTurn(kind = 'random') {
  if (!firebaseOnline || !currentRoom?.code || currentRoom.game?.type !== 'truth') return;
  const activeParticipants = getActiveOnlineParticipants();
  const selected = randomItem(activeParticipants);
  if (!selected) return;
  const card = getTruthCard(kind, currentRoom.game.intensity || 'suave');
  const round = { player: { id: selected.id, name: selected.name }, card, intensity: currentRoom.game.intensity || 'suave', createdAt: Date.now() };
  const currentRounds = Array.isArray(currentRoom.game.rounds) ? [...currentRoom.game.rounds] : [];
  currentRounds.push(round);
  try {
    await getRoomRef(currentRoom.code).child('game/rounds').set(currentRounds.slice(-50));
  } catch (error) {
    console.warn('No se pudo jugar turno de Verdad o Reto:', error);
    alert('No se pudo sacar la carta. Revisa la conexión.');
  }
}

function copyText(value) {
  if (!value) return;
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(value).catch(() => {});
    return;
  }
  const temp = document.createElement('textarea');
  temp.value = value;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  temp.remove();
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); } catch (_) { return []; }
}

function saveHistory(entry) {
  const current = getHistory();
  current.unshift(entry);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(current.slice(0, 20)));
}

function renderHistory() {
  const list = document.getElementById('historyList');
  if (!list) return;
  const history = getHistory();
  if (!history.length) {
    list.innerHTML = '<div class="empty-history">Aún no hay partidas guardadas.</div>';
    return;
  }
  list.innerHTML = history.map(item => {
    const date = new Date(item.date).toLocaleString('es-CL', { dateStyle: 'short', timeStyle: 'short' });
    return `<div class="history-item"><strong>${item.bestNames} · ${item.score}%</strong><span>${item.mode} · ${item.title}</span><small>${date}</small></div>`;
  }).join('');
}

function openHistory() {
  renderHistory();
  showScreen('historyScreen');
}

function shareCurrentResult() {
  if (!lastShareText) return;
  if (navigator.share) {
    navigator.share({ text: lastShareText }).catch(() => {});
    return;
  }
  const url = `https://wa.me/?text=${encodeURIComponent(lastShareText)}`;
  window.open(url, '_blank');
}

function openExplanation(fromScreen) {
  lastScreen = fromScreen;
  showScreen('explainScreen');
}

function backFromExplanation() {
  showScreen(lastScreen || 'homeScreen');
}

function resetCurrentGame() { startSelectedMode(); }


document.getElementById('backModesFromOnlineBtn')?.addEventListener('click', openModes);
document.getElementById('backOnlineFromLobbyBtn')?.addEventListener('click', openOnlineRoom);
document.getElementById('resetOnlineRoomBtn')?.addEventListener('click', clearCurrentRoom);
document.getElementById('clearRoomBtn')?.addEventListener('click', leaveCurrentRoom);
document.getElementById('leaveRoomBtn')?.addEventListener('click', leaveCurrentRoom);
document.getElementById('finishRoomBtn')?.addEventListener('click', finishCurrentRoom);
document.getElementById('backToLobbyBtn')?.addEventListener('click', returnRoomToLobby);
document.getElementById('onlineFinishRoomBtn')?.addEventListener('click', finishCurrentRoom);
document.getElementById('onlineBackToLobbyBtn')?.addEventListener('click', returnRoomToLobby);
document.getElementById('createRoomTab')?.addEventListener('click', () => setOnlineTab('create'));
document.getElementById('joinRoomTab')?.addEventListener('click', () => setOnlineTab('join'));
document.getElementById('createRoomBtn')?.addEventListener('click', createRoom);
document.getElementById('joinRoomBtn')?.addEventListener('click', joinRoom);
document.getElementById('addManualParticipantBtn')?.addEventListener('click', addManualParticipant);
document.getElementById('copyRoomCodeBtn')?.addEventListener('click', () => copyText(currentRoom?.code));
document.getElementById('copyInviteLinkBtn')?.addEventListener('click', () => copyText(document.getElementById('inviteLinkInput')?.value));
document.getElementById('startOnlineCompatibilityBtn')?.addEventListener('click', startOnlineCompatibilityGame);
document.getElementById('backLobbyFromOnlineGameBtn')?.addEventListener('click', () => renderLobby(true));
document.getElementById('onlineGameRefreshBtn')?.addEventListener('click', () => handleRoomStateChange(true));

document.getElementById('chooseModeBtn').addEventListener('click', openModes);
document.getElementById('historyBtn')?.addEventListener('click', openHistory);
document.getElementById('backFromHistoryBtn')?.addEventListener('click', openModes);
document.getElementById('clearHistoryBtn')?.addEventListener('click', () => { localStorage.removeItem(HISTORY_KEY); renderHistory(); });
document.getElementById('shareResultBtn')?.addEventListener('click', shareCurrentResult);
document.getElementById('backIntroFromCompatSetupBtn').addEventListener('click', () => showScreen('introScreen'));
document.getElementById('backIntroFromVibeSetupBtn')?.addEventListener('click', () => showScreen('introScreen'));
document.getElementById('startCompatibilityConfiguredBtn').addEventListener('click', startCompatibility);
document.getElementById('startVibeConfiguredBtn')?.addEventListener('click', startVibeGame);
document.querySelectorAll('.picker-option').forEach(button => {
  button.addEventListener('click', () => {
    collectParticipantNames();
    compatParticipantCount = Number(button.dataset.count);
    document.querySelectorAll('.picker-option').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    initTheme();
renderParticipantNameInputs();
renderVibeParticipantNameInputs();
renderBottleParticipantNameInputs();
renderTruthParticipantNameInputs();
renderLikelyParticipantNameInputs();
if (new URLSearchParams(window.location.search).has('room')) { openOnlineRoom(); }
  });
});


document.querySelectorAll('.vibe-picker-option').forEach(button => {
  button.addEventListener('click', () => {
    collectVibeParticipantNames();
    vibeParticipantCount = Number(button.dataset.count);
    document.querySelectorAll('.vibe-picker-option').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderVibeParticipantNameInputs();
  });
});

document.querySelectorAll('.compat-mode-option').forEach(button => {
  button.addEventListener('click', () => {
    selectedCompatibilityMode = button.dataset.compatMode;
    document.querySelectorAll('.compat-mode-option').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  });
});
document.getElementById('howBtn').addEventListener('click', () => openExplanation('homeScreen'));
document.getElementById('backHomeFromModesBtn').addEventListener('click', () => showScreen('homeScreen'));
document.getElementById('backModesFromIntroBtn').addEventListener('click', openModes);
document.getElementById('startSelectedBtn').addEventListener('click', startSelectedMode);
document.getElementById('backToModesBtn').addEventListener('click', openModes);
document.getElementById('backToModesFromCompatBtn').addEventListener('click', openModes);
document.getElementById('resetCompatBtn').addEventListener('click', () => { selectedMode === 'vibe' ? startVibeGame() : startCompatibility(); });
document.getElementById('yesBtn').addEventListener('click', () => answer(true));
document.getElementById('noBtn').addEventListener('click', () => answer(false));
document.getElementById('resetBtn').addEventListener('click', resetCurrentGame);
document.getElementById('playAgainBtn').addEventListener('click', () => {
  if (currentRoom?.status === 'playing') { renderLobby(true); return; }
  startSelectedMode();
});
document.getElementById('changeModeBtn').addEventListener('click', openModes);
document.getElementById('backFromExplainBtn').addEventListener('click', backFromExplanation);
document.getElementById('explainPlayBtn').addEventListener('click', openModes);

// v6.0 · barra inferior
// Mantiene la navegación principal siempre accesible sin alterar la lógica existente.
document.getElementById('navHomeBtn')?.addEventListener('click', () => showScreen('homeScreen'));
document.getElementById('navGamesBtn')?.addEventListener('click', openModes);
document.getElementById('navOnlineBtn')?.addEventListener('click', openOnlineRoom);
document.getElementById('navAchievementsBtn')?.addEventListener('click', openAchievements);


document.getElementById('backIntroFromBottleSetupBtn')?.addEventListener('click', () => showScreen('introScreen'));
document.getElementById('startBottleBtn')?.addEventListener('click', startBottleGame);
document.getElementById('backModesFromBottleBtn')?.addEventListener('click', openModes);
document.getElementById('resetBottleBtn')?.addEventListener('click', () => { bottleRounds = []; renderBottleRound(null); });
document.getElementById('spinBottleBtn')?.addEventListener('click', () => spinLocalBottle(false));
document.getElementById('bottlePassBtn')?.addEventListener('click', () => spinLocalBottle(true));
document.getElementById('startOnlineBottleBtn')?.addEventListener('click', startOnlineBottleGame);
document.getElementById('startOnlineTruthBtn')?.addEventListener('click', startOnlineTruthGame);
document.getElementById('applyCompatCountBtn')?.addEventListener('click', applyCompatParticipantCount);
document.getElementById('compatParticipantCountInput')?.addEventListener('change', applyCompatParticipantCount);
document.getElementById('applyVibeCountBtn')?.addEventListener('click', applyVibeParticipantCount);
document.getElementById('vibeParticipantCountInput')?.addEventListener('change', applyVibeParticipantCount);
document.getElementById('applyBottleCountBtn')?.addEventListener('click', applyBottleParticipantCount);
document.getElementById('bottleParticipantCountInput')?.addEventListener('change', applyBottleParticipantCount);
document.getElementById('applyTruthCountBtn')?.addEventListener('click', applyTruthParticipantCount);
document.getElementById('truthParticipantCountInput')?.addEventListener('change', applyTruthParticipantCount);
document.getElementById('applyLikelyCountBtn')?.addEventListener('click', applyLikelyParticipantCount);
document.getElementById('likelyParticipantCountInput')?.addEventListener('change', applyLikelyParticipantCount);
document.getElementById('startPairBtn')?.addEventListener('click', startPairGame);
document.getElementById('backIntroFromPairSetupBtn')?.addEventListener('click', () => showScreen('introScreen'));
document.getElementById('backModesFromPairBtn')?.addEventListener('click', openModes);
document.getElementById('resetPairBtn')?.addEventListener('click', startPairGame);

document.querySelectorAll('.bottle-picker-option').forEach(button => {
  button.addEventListener('click', () => {
    collectBottleParticipantNames();
    bottleParticipantCount = Number(button.dataset.count);
    document.querySelectorAll('.bottle-picker-option').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderBottleParticipantNameInputs();
renderTruthParticipantNameInputs();
  });
});
document.querySelectorAll('.bottle-intensity-option').forEach(button => {
  button.addEventListener('click', () => {
    selectedBottleIntensity = button.dataset.bottleIntensity;
    document.querySelectorAll('.bottle-intensity-option').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  });
});

document.getElementById('backIntroFromTruthSetupBtn')?.addEventListener('click', () => showScreen('introScreen'));
document.getElementById('startTruthBtn')?.addEventListener('click', startTruthGame);
document.getElementById('backModesFromTruthBtn')?.addEventListener('click', openModes);
document.getElementById('resetTruthBtn')?.addEventListener('click', () => { truthRounds = []; renderTruthRound(null); });
document.getElementById('truthTruthBtn')?.addEventListener('click', () => playTruthTurn('verdad'));
document.getElementById('truthDareBtn')?.addEventListener('click', () => playTruthTurn('reto'));
document.getElementById('truthRandomBtn')?.addEventListener('click', () => playTruthTurn('random'));
document.querySelectorAll('.truth-picker-option').forEach(button => {
  button.addEventListener('click', () => {
    collectTruthParticipantNames();
    truthParticipantCount = Number(button.dataset.count);
    document.querySelectorAll('.truth-picker-option').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderTruthParticipantNameInputs();
  });
});
document.querySelectorAll('.truth-intensity-option').forEach(button => {
  button.addEventListener('click', () => {
    selectedTruthIntensity = button.dataset.truthIntensity;
    document.querySelectorAll('.truth-intensity-option').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  });
});

document.getElementById('backIntroFromLikelySetupBtn')?.addEventListener('click', () => showScreen('introScreen'));
document.getElementById('startLikelyBtn')?.addEventListener('click', startLikelyGame);
document.getElementById('backModesFromLikelyBtn')?.addEventListener('click', openModes);
document.getElementById('resetLikelyBtn')?.addEventListener('click', startLikelyGame);
document.getElementById('nextLikelyQuestionBtn')?.addEventListener('click', nextLikelyQuestion);
document.getElementById('shareLikelyBtn')?.addEventListener('click', shareLikelyRanking);



document.querySelectorAll('.pair-mode-option').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.pair-mode-option').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

document.getElementById('achievementsBtn')?.addEventListener('click', openAchievements);
document.getElementById('backFromAchievementsBtn')?.addEventListener('click', openModes);
document.getElementById('clearAchievementsBtn')?.addEventListener('click', () => {
  if (confirm('¿Reiniciar todos los logros de este navegador?')) {
    localStorage.removeItem(ACHIEVEMENTS_KEY);
    renderAchievements();
  }
});
document.querySelectorAll('.theme-chip').forEach(button => {
  button.addEventListener('click', () => {
    applyTheme(button.dataset.theme);
    unlockAchievement('theme');
  });
});

document.querySelectorAll('.mode-card').forEach(button => {
  button.addEventListener('click', () => prepareMode(button.dataset.mode));
});

initTheme();
renderParticipantNameInputs();
renderVibeParticipantNameInputs();
renderBottleParticipantNameInputs();
renderTruthParticipantNameInputs();
renderLikelyParticipantNameInputs();
if (new URLSearchParams(window.location.search).has('room')) { openOnlineRoom(); }

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  });
}
