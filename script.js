    // --- Данные фильмов (пример — 9 фильмов) ---
    const MOVIES = [
        { 
          id:'f1', 
          title:'Август', 
          rating:'8.4', 
          genre:'16+ Драма Триллер', 
          poster:'img/август.jpg', 
          trailer:'https://rutube.ru/play/embed/fcbf32db44bf19efe715340bc06fb4de/', // Замени на реальную ссылку
          trailerType: 'rutube',
          shortDesc: '1944 год. Контрразведчики СМЕРШ охотятся за вражескими диверсантами в белорусских лесах.',
          fullDesc: 'Август 1944 года. Глухие леса Западной Белоруссии. Средиземье, недавно освобожденная территория — особая зона, где действуют оставленные в советском тылу вражеские разведывательно-диверсионные группы. Советские войска переходят государственную границу, война поворачивает вспять. Помешать этому может удар в спину наступающей армии. Предотвратить нападение могут только контрразведчики СМЕРШ…',
          sessions:['2025-09-27T18:30','2025-09-27T21:30']
        },
        { 
          id:'f2', 
          title:'Воображаемый друг', 
          rating:'7.9', 
          genre:'18+ Ужасы', 
          poster:'img/воображаемый_друг.jpg', 
          trailer:'https://www.youtube.com/embed/EXAMPLE2',
          shortDesc: 'Плюшевый мишка мстит за брошенное детское воображение. Ужасы от создателей "Пилы".',
          fullDesc: 'Вместе с мужем и двумя детьми Джессика возвращается в дом, в котором выросла. Там ее приемная дочь обнаруживает потрепанного плюшевого мишку, который очень напоминает воображаемого друга детства Джессики. Но тем, что женщина его бросила, он расстроен по-настоящему...',
          sessions:['2025-09-27T17:00','2025-09-27T20:00']
        },
        { 
          id:'f3', 
          title:'Сумерки. Сага. Затмение', 
          rating:'7.2', 
          genre:'18+ Фентези', 
          poster:'img/сумерки.jpg', 
          trailer:'https://www.youtube.com/embed/EXAMPLE3',
          shortDesc: 'Белла выбирает между вампиром Эдвардом и оборотнем Джейкобом. Третий фильм культовой саги.',
          fullDesc: 'Сиэтл охвачен чередой таинственных убийств, а обуреваемая жаждой мести вампирша продолжает поиски Беллы, снова оказавшейся в смертельной опасности. Кроме того, находясь в эпицентре всех событий, Белла вынуждена делать выбор между любовью к Эдварду и дружбой с Джейкобом, зная что ее решение может послужить толчком к возобновлению давнего противостояния между вампирами и оборотнями.',
          sessions:['2025-09-27T19:45']
        },
        { 
          id:'f4', 
          title:'Истребитель демонов: Бесконечная крепость', 
          rating:'8.9', 
          genre:'18+ Аниме', 
          poster:'img/клинок.jpg', 
          trailer:'https://www.youtube.com/embed/EXAMPLE4',
          shortDesc: 'Тандзиро и друзья попадают в ловушку демонического замка. Продолжение хита 2023 года.',
          fullDesc: 'Демоны убили всех родных Тандзиро Камадо и обратили его младшую сестру Нэдзуко в демона. Парень вступил в Корпус истребителей демонов. Пока бойцы тренируются и готовятся к схватке с демонами, в поместье главы Корпуса появляется Мудзан Кибуцудзи — прародитель всех демонов и убийца семьи Тандзиро. Истребители спешат лидеру на помощь, но Мудзан переносит их в крепость демонов под названием Замок бесконечности.',
          sessions:['2025-09-27T15:00','2025-09-27T18:00']
        },
        { 
          id:'f5', 
          title:'Атель-Матель', 
          rating:'7.6', 
          genre:'16+ Комедия', 
          poster:'img/атель-матель.jpg', 
          trailer:'https://www.youtube.com/embed/EXAMPLE5',
          shortDesc: 'Мошенник выдает дагестанский сарай за эко-отель. Комедия с Давидом Тумановым.',
          fullDesc: 'Саша Родионов, пронырливый обнальщик из Москвы, задолжал денег опасному авторитету по кличке Пчеловод. Он не прощает задержек и жестоко расправляется с должниками, поэтому Саша вместе с семьей бежит в Дагестан по программе защиты свидетелей. Вот только жена и дети уверены, что это обычный отпуск, и теперь Саша вынужден выдать ветхий сарай в горном ауле за модный эко-отель.',
          sessions:['2025-09-27T16:00','2025-09-27T19:00']
        },
        { 
          id:'f6', 
          title:'Дракула', 
          rating:'8.1', 
          genre:'18+ Ужасы Мелодрама', 
          poster:'img/дракула.jpg', 
          trailer:'https://www.youtube.com/embed/EXAMPLE6',
          shortDesc: 'Влад Дракула становится вампиром ради вечной любви. Готическая романтическая драма.',
          fullDesc: 'Принц Влад II, граф Дракула, живет ради любви к своей жене, принцессе Елизавете. Несравненная по красоте и доброте, она — его воздух, его кровь, единственный смысл его существования. Вернувшись с победоносной войны, которую он вел во имя Церкви, принц узнает о смерти Елизаветы. Убитый горем он гневается на Бога, который отнял у него самое дорогое.',
          sessions:['2025-09-27T14:00','2025-09-27T20:30']
        },
        { 
          id:'f7', 
          title:'Зверопоезд', 
          rating:'7.8', 
          genre:'6+ Анимационное приключение', 
          poster:'img/зверопоезд.jpg', 
          trailer:'https://www.youtube.com/embed/EXAMPLE7',
          shortDesc: 'Домашние питомцы на мчащемся поезде против злодейского барсука. Анимация для всей семьи.',
          fullDesc: 'Оказавшиеся в ловушке на мчащемся поезде домашние питомцы должны сорвать планы мстительного барсука Ганса. Пушистые заложники могут рассчитывать лишь на Сокола — хитрого и изобретательного енота, готового на все, чтобы их спасти.',
          sessions:['2025-09-27T13:30','2025-09-27T17:30']
        },
        { 
          id:'f8', 
          title:'Долгая прогулка', 
          rating:'8.0', 
          genre:'18+ Триллер Драма', 
          poster:'img/долгая_прогулка.jpg', 
          trailer:'https://www.youtube.com/embed/EXAMPLE8',
          shortDesc: 'Подростки идут к смерти в тоталитарном шоу. Экранизация Стивена Кинга.',
          fullDesc: 'Будущее. Тоталитарное государство ежегодно проводит показательное состязание под названием «Долгая прогулка». Чтобы выиграть крупный приз, полсотни подростков выходят на трассу и должны идти, не останавливаясь ни на минуту. Сбавил скорость — предупреждение. Три предупреждения — и тебя убивают.',
          sessions:['2025-09-27T12:00','2025-09-27T20:45']
        },
      ];
      
          // --- Минимальные утилиты ---
          const $ = sel => document.querySelector(sel);
          const $$ = sel => Array.from(document.querySelectorAll(sel));
      
          // --- Инициализация UI ---
          document.getElementById('year').textContent = new Date().getFullYear();
      
          // --- Сохранение корзины в localStorage ---
          const CART_STORAGE_KEY = 'cineverse_cart';
          
          function loadCartFromStorage() {
            try {
              const saved = localStorage.getItem(CART_STORAGE_KEY);
              return saved ? JSON.parse(saved) : [];
            } catch (e) {
              console.error('Ошибка загрузки корзины:', e);
              return [];
            }
          }
          
          function saveCartToStorage(cart) {
            try {
              localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
            } catch (e) {
              console.error('Ошибка сохранения корзины:', e);
            }
          }
          
          let CART = loadCartFromStorage(); // Загружаем корзину из localStorage
          const PRICE = { standard:300, premium:500, vip:1200 };
      
          // Render movies on home
          const moviesGrid = $('#moviesGrid');
          function renderMovies(list){
            moviesGrid.innerHTML = '';
            list.forEach(m=>{
              const card = document.createElement('article');
              card.className = 'movie-card';
              card.innerHTML = `
                <div class="poster" tabindex="0" aria-label="${m.title} постер" data-id="${m.id}">
                  <img src="${m.poster}" alt="${m.title}" loading="lazy">
                </div>
                <div class="movie-info">
                  <h3>${m.title} <span class="rating">${m.rating}</span></h3>
                  <div class="meta">${m.genre}</div>
                  <div class="movie-hover-desc">${m.shortDesc}</div>
                </div>
              `;
              moviesGrid.appendChild(card);
            });
            attachMovieEvents();
          }
          renderMovies(MOVIES);
      
          // --- Movie events (hover, click) ---
          function attachMovieEvents(){
            $$('.poster').forEach(p=>{
              p.addEventListener('mouseenter', ()=>p.classList.add('hover'));
              p.addEventListener('mouseleave', ()=>p.classList.remove('hover'));
              p.addEventListener('click', (e)=>openMovieDetails(e.currentTarget.dataset.id));
              p.addEventListener('keydown', (e)=>{
                if(e.key==='Enter') openMovieDetails(e.currentTarget.dataset.id);
              });
            });
      
            $$('.card-actions .btn.secondary').forEach(b=>{
              b.addEventListener('click', ()=>openMovieDetails(b.dataset.id));
            });
      
            $$('.card-actions .btn.primary').forEach(b=>{
              b.addEventListener('click', ()=>openSeatModal(b.dataset.id));
            });
          }
      
          // --- Movie details modal ---
          function openMovieDetails(id){
            const m = MOVIES.find(m=>m.id===id);
            if(!m) return;
            
            $('#detailsTitle').textContent = m.title;
            $('#detailsMeta').textContent = `${m.genre} · Рейтинг: ${m.rating}`;
            $('#detailsDesc').textContent = m.fullDesc;
            $('#detailsPoster').src = m.poster;
            $('#detailsPoster').alt = m.title;
            // Трейлер с поддержкой Rutube
            const trailerEl = $('#detailsTrailer');
              trailerEl.innerHTML = '';
              
              if(m.trailer) {
                if(m.trailer.includes('youtube.com/embed') || m.trailerType === 'youtube') {
                  // YouTube
                  trailerEl.innerHTML = `
                    <iframe width="100%" height="100%" src="${m.trailer}" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen title="Трейлер фильма ${m.title}">
                    </iframe>
                  `;
                } else if(m.trailer.includes('rutube.ru') || m.trailerType === 'rutube') {
                  // Rutube
                  trailerEl.innerHTML = `
                    <iframe width="100%" height="100%" src="${m.trailer}" 
                            frameborder="0" allowfullscreen 
                            title="Трейлер фильма ${m.title}">
                    </iframe>
                  `;
                } else if(m.trailerType === 'local' || m.trailer.endsWith('.mp4') || m.trailer.endsWith('.webm')) {
                  // Локальное видео
                  trailerEl.innerHTML = `
                    <video width="100%" height="100%" controls style="border-radius:8px;">
                      <source src="${m.trailer}" type="video/mp4">
                      Ваш браузер не поддерживает видео.
                    </video>
                  `;
                } else {
                  trailerEl.innerHTML = '<div>Трейлер скоро будет доступен</div>';
                }
              } else {
                trailerEl.innerHTML = '<div>Трейлер скоро будет доступен</div>';
              }
            
            // Render sessions
            const sessionsEl = $('#detailsSessions');
            sessionsEl.innerHTML = '';
            m.sessions.forEach(s=>{
              const date = new Date(s);
              const btn = document.createElement('button');
              btn.className = 'btn small';
              btn.textContent = date.toLocaleTimeString('ru', {hour:'2-digit',minute:'2-digit'});
              btn.addEventListener('click', ()=>openSeatModal(id, s));
              sessionsEl.appendChild(btn);
            });
            
            // Book button
            $('#detailsBookBtn').onclick = ()=>openSeatModal(id);
            
            $('#movieDetailsModal').classList.add('open');
          }
      
          // --- Seat modal ---
          let selectedSeats = [];
          let currentMovie = null;
          let currentSession = null;
      
          function openSeatModal(movieId, session=null){
            const m = MOVIES.find(m=>m.id===movieId);
            if(!m) return;
            currentMovie = m;
            currentSession = session || m.sessions[0];
            
            $('#modalMovieInfo').innerHTML = `<h3>${m.title}</h3><p>${new Date(currentSession).toLocaleString('ru')}</p>`;
            
            // Generate seats
            const seatMap = $('#modalSeatMap');
            seatMap.innerHTML = '';
            for(let i=1; i<=48; i++){
              const seat = document.createElement('div');
              seat.className = 'seat';
              seat.textContent = i;
              seat.dataset.seat = i;
              seat.addEventListener('click', ()=>toggleSeat(i));
              seatMap.appendChild(seat);
            }
            
            selectedSeats = [];
            updateSeatModal();
            $('#seatModal').classList.add('open');
          }
      
          function toggleSeat(seatNum){
            const idx = selectedSeats.indexOf(seatNum);
            if(idx>-1){
              selectedSeats.splice(idx,1);
            }else{
              selectedSeats.push(seatNum);
            }
            updateSeatModal();
          }
      
          function updateSeatModal(){
            $$('.seat').forEach(s=>{
              s.classList.remove('selected');
              if(selectedSeats.includes(Number(s.dataset.seat))) s.classList.add('selected');
            });
            $('#modalSelected').textContent = selectedSeats.length ? selectedSeats.join(', ') : '—';
            const price = PRICE[$('#modalTicketType').value];
            $('#modalPrice').textContent = (selectedSeats.length * price) + ' руб';
          }
      
          // --- Cart functionality ---
          function updateCartUI(){
            const count = CART.reduce((sum,item)=>sum+item.seats.length, 0);
            $('#cartCount').textContent = count;
            
            const cartItems = $('#cartItems');
            if(CART.length===0){
              cartItems.innerHTML = '<div class="empty">Корзина пуста</div>';
              $('#cartTotal').textContent = '0 руб';
              return;
            }
            
            let html = '';
            let total = 0;
            CART.forEach((item,idx)=>{
              const itemTotal = item.seats.length * PRICE[item.ticketType];
              total += itemTotal;
              html += `
                <div class="cart-item">
                  <img src="${item.poster}" alt="${item.title}">
                  <div class="ci-mid">
                    <div><strong>${item.title}</strong></div>
                    <div class="muted">${new Date(item.session).toLocaleString('ru')}</div>
                    <div class="muted">Места: ${item.seats.join(', ')} · ${item.ticketType}</div>
                  </div>
                  <div class="ci-right">
                    <div>${itemTotal} руб</div>
                    <button class="btn small" data-index="${idx}" aria-label="Удалить из корзины">✕</button>
                  </div>
                </div>
              `;
            });
            cartItems.innerHTML = html;
            $('#cartTotal').textContent = total + ' руб';
            
            // Attach remove events
            $$('#cartItems .btn').forEach(b=>{
              b.addEventListener('click', ()=>removeFromCart(Number(b.dataset.index)));
            });
            
            // Save cart to localStorage
            saveCartToStorage(CART);
          }
      
          function addToCart(movie, session, seats, ticketType){
            CART.push({
              movieId: movie.id,
              title: movie.title,
              poster: movie.poster,
              session: session,
              seats: [...seats],
              ticketType: ticketType
            });
            updateCartUI();
          }
      
          function removeFromCart(index){
            CART.splice(index,1);
            updateCartUI();
          }
      
          function clearCart(){
            CART = [];
            updateCartUI();
          }
      
          // --- Event listeners ---
          // Navigation
          $$('.nav-link').forEach(link=>{
            link.addEventListener('click', (e)=>{
              e.preventDefault();
              const route = e.target.dataset.route;
              $$('.page').forEach(p=>p.classList.remove('active'));
              $$('.nav-link').forEach(l=>l.classList.remove('active'));
              $(`#page-${route}`).classList.add('active');
              e.target.classList.add('active');
            });
          });
      
          // Search
          $('#searchToggle').addEventListener('click', ()=>{
            const sb = $('#searchBar');
            sb.classList.toggle('open');
            if(sb.classList.contains('open')) $('#globalSearch').focus();
          });
      
          $('#searchClear').addEventListener('click', ()=>{
            $('#globalSearch').value = '';
            renderMovies(MOVIES);
          });
      
          $('#globalSearch').addEventListener('input', (e)=>{
            const q = e.target.value.toLowerCase();
            if(q.length<2) return renderMovies(MOVIES);
            const filtered = MOVIES.filter(m=>
              m.title.toLowerCase().includes(q) || 
              m.genre.toLowerCase().includes(q)
            );
            renderMovies(filtered);
          });
      
          // Cart panel
          $('#cartToggle').addEventListener('click', ()=>{
            $('#cartPanel').classList.add('open');
          });
      
          $('#closeCart').addEventListener('click', ()=>{
            $('#cartPanel').classList.remove('open');
          });
      
          $('#clearCart').addEventListener('click', clearCart);
      
          $('#checkoutBtn').addEventListener('click', ()=>{
            alert('Оформление заказа (демо)');
            clearCart();
            $('#cartPanel').classList.remove('open');
          });
      
          // Seat modal
          $('#closeSeatModal').addEventListener('click', ()=>{
            $('#seatModal').classList.remove('open');
          });
      
          $('#modalCancel').addEventListener('click', ()=>{
            $('#seatModal').classList.remove('open');
          });
      
          $('#modalTicketType').addEventListener('change', updateSeatModal);
      
          $('#modalAddToCart').addEventListener('click', ()=>{
            if(selectedSeats.length===0) return alert('Выберите места!');
            addToCart(currentMovie, currentSession, selectedSeats, $('#modalTicketType').value);
            $('#seatModal').classList.remove('open');
            alert('Добавлено в корзину!');
          });
      
          // Movie details modal
          $('#closeMovieDetailsModal').addEventListener('click', ()=>{
            $('#movieDetailsModal').classList.remove('open');
          });
      
          // Close modals on outside click
          [ $('#seatModal'), $('#movieDetailsModal') ].forEach(modal=>{
            modal?.addEventListener('click', (e)=>{
              if(e.target===modal) modal.classList.remove('open');
            });
          });
      
          // Logo click
          $('#logo').addEventListener('click', ()=>{
            $$('.page').forEach(p=>p.classList.remove('active'));
            $$('.nav-link').forEach(l=>l.classList.remove('active'));
            $('#page-home').classList.add('active');
            $('[data-route="home"]').classList.add('active');
          });
      
          // Initialize cart UI
          updateCartUI();