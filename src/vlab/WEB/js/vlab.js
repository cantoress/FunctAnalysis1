function init_lab() {

    var vlab_code = '<div class="vlab_setting">' +
        '<div class="block_title">' +
        '<div class="vlab_name">Исследование общей вариабельности сердечного ритма</div>' +
        '<input class="btn_help btn" type="button" value="Справка" title="Справка по работе с лабораторией"/>' +
        '<input class="btn_theory btn" type="button" value="Теория" title="Теоретические сведения для расчетов"/>' +
        '</div>' +
        '<div class="block_task">' +
        '<div class="task_text">' +
        '<p>Рассчитайте все необходимые параметры, используя данные вашего варианта.<br>Точность всех вводимых значений - 3 знака после запятой</p>' +
        '<p>Данные вашего варианта можно скачать здесь:</p>' +
        '<div class="file_buttons">' +
        '<input type="button" class="file_txt_button" value="Файл в формате txt" disabled>' +
        '<input type="button" class="file_xlsx_button" value="Файл в формате xlsx" disabled></div></div>' +
        '</div>' +
        '<div class="block_plot"><p class = "hist_comment">    </p>' +
        '<div class="block_hist">' +
        '</div>' +
        '</div>' +
        '<div class="vlab_answers answers_1">' +
        '<div class = "task_number">1/4</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="HistIntervals_value">Значения кардиоинтервалов: </label></td>' +
        '<td><input type="text" ' +
        'id="HistIntervals_value">  мс</td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="HistValues_value">Значения частоты: </label></td>' +
        '<td><input type="text" ' +
        'id="HistValues_value"></td>' +
        '</tr>' +
        '</table>' +
        '<input type="button" class="btn btn_hist" value="Построить гистограмму"/>' +
        '</div>' +
        '<div class="vlab_answers answers_2">' +
        '<div class = "task_number">2/4</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="M_value">Значение параметра М: </label></td>' +
        '<td><input type="text" id="M_value" class = "input_is_not_NAN">  мс</td>' +
        '<td><label for="SDNN_value">Значение параметра SDNN: </label></td>' +
        '<td><input type="text" id="SDNN_value" class = "input_is_not_NAN">  мс</td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="CV_value">Значение параметра CV: </label></td>' +
        '<td><input type="text" id="CV_value" class = "input_is_not_NAN">  %</td>' +
        '<td><label for="RMSSD_value">Значение параметра RMSSD: </label></td>' +
        '<td><input type="text" id="RMSSD_value" class = "input_is_not_NAN">  мс</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="vlab_answers answers_3">' +
        '<div class = "task_number">3/4</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="Mo_value">Значение параметра Мo: </label></td>' +
        '<td><input type="text" id="Mo_value" class = "input_is_not_NAN">  мс</td>' +
        '<td><label for="AMo_value">Значение параметра AMo:</label></td>' +
        '<td><input type="text" id="AMo_value" class = "input_is_not_NAN"> %</td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="MxDMn_value">Значение параметра МxDMn: </label></td>' +
        '<td><input type="text" id="MxDMn_value" class = "input_is_not_NAN">  мс</td>' +
        '</tr>' +
        '</table>' +
        '<input type="button" class="btn btn_values" value="Отобразить параметры"/>' +
        '</div>' +
        '<div class="vlab_answers answers_4">' +
        '<div class = "task_number">4/4</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="SI_value">Значение параметра ИН (SI): </label></td>' +
        '<td><input type="text" id="SI_value" class = "input_is_not_NAN"></td>' +
        '</tr>' +
        '</table>' +
        '<p>' +
        'Выберите утверждение, которое лучше всего описывает полученный результат:<br>' +
        '<input type="radio" name="SIDescription" value="normal">Индекс напряжения в норме, пациент находится в состоянии покоя<br>' +
        '<input type="radio" name="SIDescription" value="small increase" checked>Индекс напряжения незначительно превышает норму, пациент испытывает небольшую нагрузку<br>' +
        '<input type="radio" name="SIDescription" value="big increase">Индекс напряжения значительно выше нормы, пациент испытывает значительную нагрузку<br>' +
        '</p>' +
        '</div>' +
        '<div class="block_control">' +
        '<input class="btn_prev btn not_active" type="button" value="К предыдущему этапу" disabled/>' +
        '<input class="btn_next btn" type="button" value="К следующему этапу"/>' +
        '</div>' +
        '<div class="block_help">' +
        '<h1>Справка по работе с лабораторией</h1>' +
        '<p>В данной лаборатории Вам необходимо выполнить 4 этапа: построить гистограмму, рассчитать статистические характеристики (M, SDNN, CV, RMSSD), рассчитать характеристики гистограммы (AMo, Mo, MxDMn), рассчитать индекс напряжения (SI) и сделать вывод о состоянии пациента.</p>' +
        '<p>В качестве исходных данных используются реальные данные кардиоинтервалограммы, которые рассматриваются как совокупность последовательных временных промежутков – RR-интервалов. </p>' +
        '<p>Данные вашего варианта Вы можете скачать, нажав на соответствующие кнопки в верхней части экрана. Вы можете выбрать формат файла, который удобнее для использования в расчетах. Если Вы собираетесь писать на каком-либо языке программирования, то мы рекомендуем использовать txt-файл. Если же Вы собираетесь обрабатывать данные в Excel, то мы рекомендуем использовать xlsx-файл.</p>' +
        '<p>Вы можете переключаться между этапами, используя кнопки внизу экрана, при этом все введенные данные будут сохранены. Вы можете выполнять этапы в любом порядке, однако некоторые последующие этапы зависят от данных из предыдущих этапов, поэтому мы рекомендуем выполнять этапы именно в том порядке, в котором они расположены.</p>' +
        '<p>В 1 и 3 этапах есть кнопки, запускающие визуализацию введенных данных. Будьте внимательны к формату введенных данных, который необходим для корректной работы визуализации. Визуализация используется для большей наглядности полученных данных, однако ее использование не является обязательным условием выполнения задания.</p>' +
        '<p>Для каждого этапа есть страница с теоретическим материалом, которую можно открыть, нажав на соответствующую кнопку в правом верхнем углу экрана. Пожалуйста, внимательно читайте расположенный там материал, так как он содержит всю необходимую информацию для выполнения этапа, а также формат, в котором должны быть представлены данные для того, чтобы Ваш ответ считался правильным.</p>' +
        '<p class = "text-center">Желаем успехов!</p>' +
        '</div>' +
        '<div class="block_theory theory_1">' +
        '<h1>Построение гистограммы</h1>' +
        '<p>Построение гистограммы - один из способов визуализировать статистические данные. В данном этапе задания Вам необходимо построить гистограмму, используя данные своего варианта.</p>' +
        '<p>Гистограмма в математической статистике — это функция, приближающая плотность вероятности некоторого распределения, построенная на основе выборки из него. Гистограммы применяются в основном для визуализации данных на начальном этапе статистической обработки. </p>' +
        '<p>Для построения гистограммы необходимо выполнить следующие действия:</p>' +
        '<ol>' +
        '<li>Сначала множество значений, которое может принимать элемент выборки, разбивается на несколько интервалов. Чаще всего эти интервалы берут одинаковыми, но это не является строгим требованием. В нашем случае мы будем использовать интервалы по 50 мс.<br>' +
        'Для того, чтобы стандартизировать проверку ответов, используются следующие правила по выбору минимального и максимального значений интервалов:' +
        '<ul>' +
        '<li>в качестве минимального значения выбирается число, получающееся при округлении минимального значения кардиоинтервала к числу, кратному 100, в меньшую сторону. Например, если минимальное значение Вашего варианта равно 733, то минимальный кардиоинтервал для гистограммы будет равен 700. Аналогично, если минимальное значение равно 799, то минимальный кардиоинтервал для гистограммы будет все равно равен 700.</li>' +
        '<li class = "block_help_last_li">в качестве максимального значения выбирается число, получающееся при округлении максимального значения кардиоинтервала к числу, кратному 100, в большую сторону. Например, если максимальное значение Вашего варианта равно 875, то максимальный кардиоинтервал для гистограммы будет равен 900. Аналогично, если максимальное значение равно 801, то минимальный кардиоинтервал для гистограммы будет все равно равен 900.</li>' +
        '</ul>' +
        'Для выполнения задания Вам необходимо перечислить ВСЕ интервалы, которые будут участвовать в построении гистограммы, т. е. если вы определили, что для Вашего варианта минимальный кардиоинтервал равен 700, а максимальный - 900, то в поле ответа вы должны ввести: 700, 750, 800, 850, 900. Все числа вводятся в порядке возрастания, через запятую. В ответе не должно присутствовать никаких других символов, кроме цифр и запятых.' +
        '</li>' +
        '<li>Дальше необходимо посчитать, сколько значений кардиоинтервалов попало в каждый интервал гистограммы. В нашем случае, если значение кардиоинтервала попало на границу двух интервалов гистограмммы, то мы считаем, что это значение из интервала с меньшими значениями. Например, если у нас есть интервалы 750-800 и 800-850, а значение кардиоинтервала равно 800, то мы считаем, что это значение из интервала 750-800.</li>' +
        '<li>Следующий этап построения гистограммы - нахождение частоты попадания в каждый интервал. Для этого Вам необходимо поделить числа, полученные в предыдущем пункте, на общее число кардиоинтервалов в Вашем варианте. Таким образом, у Вас получится набор чисел, каждое из которых лежит в пределах от 0 до 1. Именно эти числа Вам необходимо внести в ответ, В ТОМ ЖЕ ПОРЯДКЕ, в котором вы вводили кардиоинтервалы. Учитывайте, что для разделения целой и дробной части необходимо использовать точку, а перечислять значения - через запятую. В ответе не должно присутствовать никаких других символов, кроме цифр, точек и запятых.<br>' +
        '</li>' +
        '</ol>' +
        '<p>Пример ответа:</p>' +
        '<p class="block_help_answer_example"> Значения кардиоинтервалов: 700, 750, 800, 850, 900</p>' +
        '<p class="block_help_answer_example"> Значения частот: 0.2, 0.3, 0.4, 0.1</p>' +
        '<p>Это означает, что частота попадания в интервал 700-750 равна 0.2, частота попадания в интервал 750-800 равна 0.3, частота попадания в интервал 800-850 равна 0.4, частота попадания в интервал 850-900 равна 0.1.</p>' +
        '<p>Обратите внимание: число значений кардиоинтервалов на 1 больше, чем число значений частот!</p>' +
        '<p>Для помощи в представлении данных и самопроверки на странице этапа есть кнопка "Построить гистограмму", которая отрисовывает гистограмму по введенным Вами данным. Также она позволяет отсечь ошибки ввода, например, если вы ввели символы, отличные от цифр, запятых и точек, или ошиблись в числе значений кардиоинтервалов или числе значений частот. Отрисовка гистограммы не является обязательной для выполнения задания, однако мы крайне рекомендуем воспользоваться этой возможностью проверить себя перед завершением выполнения задания.</p>' +
        '<p>Точность вводимых значений, если число дробное: 3 знака после запятой.</p>' +
        '</div>' +
        '<div class="block_theory theory_2">' +
        '<h1>Статистические характеристики</h1>' +
        '<p><b>Статистические методы</b> анализа в нашем упражнении применяются для непосредственной количественной оценки основных параметров вариабельности сердечного ритма (ВРС) в исследуемый промежуток времени. При их использовании кардиоинтервалограмма (КИГ) рассматривается как совокупность последовательных временных промежутков – RR-интервалов. </p>' +
        '<p>В этом этапе задания Вам необходимо посчитать следующие статистические характеристики: </p>' +
        '<ul>' +
        '<li>Математическое ожидание (М) <br><div class="theory_img"><img alt = "" src="theory_2_1.png" /> мс,</div><br> где Xi– значение i-го кардиоинтервала;</li>' +
        '<li>Среднеквадратическое отклонение СКО (SDNN) – это суммарный показатель вариабельности величин интервалов RR за весь рассматриваемый период, отражающий суммарный эффект вегетативной регуляции кровообращения<br><div class="theory_img"><img alt = "" src="theory_2_2.png" /> мс, </div><br>где Xi– значение i-го кардиоинтервала; n – количество кардиоинтервалов за период;</li>' +
        '<li>Коэффициент вариации (CV) полного массива кардиоинтервалов представляет собой нормированную оценку SDNN<br><div class="theory_img"><img alt = "" src="theory_2_3.png" /></div></li>' +
        '<li>Среднеквадратическая разностная характеристика (RMSSD) - отражает уровень активности парасимпатического отдела вегетативной регуляции (автономного контура регуляции)<br><div class="theory_img"><img alt = "" src="theory_2_4.png" /> мс</div></li>' +
        '</ul>' +
        '<p>Точность вводимых значений: 3 знака после запятой.</p>' +
        '</div>' +
        '<div class="block_theory theory_3">' +
        '<h1>Геометрические характеристики</h1>' +
        '<p>Помимо статистических характеристик мы рассмотрим геометрические характеристики - это те характеристики, которые описывают построенную ранее гистограмму.</p>' +
        '<p>В этом этапе Вам необходимо посчитать следующие геометрические характеристики: </p>' +
        '<ul>' +
        '<li>Мода (Мо)– это наиболее часто встречающееся в данном динамическом ряде значение кардиоинтервала. При нормальном распределении и высокой стационарности исследуемого процесса значение Мо приближенно равно математическому ожиданию М. В нашем случае значение Мо соответствует середине интервала гистограммы, в котором находится наибольшее количество значений. Обратите внимание, указывать надо именно середину интервала!</li>' +
        '<li>Амплитуда моды (АМо) - это значение частоты интервала, соответствующего моде, выраженное в процентах</li>' +
        '<li>Вариационный размах (MxDMn) отражает степень вариативности значений кардиоинтервалов в исследуемом динамическом ряду. Он вычисляется по разности максимального Mx и минимального Mn значений кардиоинтервалов и поэтому при аритмиях или артефактах может быть искажен. Так как по гистограмме сложно определить точные значения, определяйте максимальное и минимальное значения по исходным данным! <br><div class="theory_img"><img alt = "" src="theory_3_1.png" /></div></li>' +
        '</ul>' +
        '<p>Все вводимые значения - это числа, дробная часть отделяется точкой.</p>' +
        '<p>Для помощи в представлении данных и самопроверки на странице этапа есть кнопка "Отобразить параметры", которая позволяет отобразить введенные данные. Визуализация работает, если уже была построена гистограмма и введен хотя бы один параметр. Учитывайте, что все необходимые параметры лежат в пределах соответствующих осей гистограммы. Отображение параметров позволяет избежать ошибок ввода (например, если были введены другие символы, кроме чисел, или введенные значения лежат вне осей гистограммы). Отображение не является обязательным для выполнения задания, однако мы крайне рекомендуем воспользоваться этой возможностью проверить себя перед завершением выполнения задания.</p>' +
        '<p>Точность вводимых значений, если число дробное: 3 знака после запятой.</p>' +
        '</div>' +
        '<div class="block_theory theory_4">' +
        '<h1>Индекс напряжения</h1>' +
        '<p>Активация центрального контура, усиление симпатической регуляции во время психических или физических нагрузок проявляется стабилизацией ритма, уменьшением разброса длительностей кардиоинтервалов, увеличением количества однотипных по длительности интервалов (рост амплитуды моды). Анализ формы гистограмм наглядно демонстрирует этот процесс в виде сужения гистограммы с одновременным ростом высоты.<br>Количественно это может быть выражено отношением высоты гистограммы к ее ширине. Этот показатель получил название <b>индекса напряжения регуляторных систем (ИН) или стресс-индекса (SI)</b>: </p>' +
        '<br><div class="theory_img"><img alt = "" src="theory_4_1.png" /></div>' +
        '<p>Таким образом, индекс напряжения отражает степень напряжения регуляторных систем (степень преобладания активности центральных механизмов регуляции над автономными). В норме ИН колеблется в пределах до 150 условных единиц. Этот показатель очень чувствителен к усилению тонуса симпатической нервной системы. Небольшая нагрузка (физическая, эмоциональная, умственная) увеличивают ИН до значений 150-300 единиц. При значительных нагрузках он растет до значений более 300 единиц.</p>' +
        '<p>Учитывайте, что в ходе вычислений мы использовали миллисекунды, т. е. для получения правильного результата необходимо привести их к секундам.</p>' +
        '<p>Точность вводимых значений, если число дробное: 3 знака после запятой.</p>' +
        '</div>';

    var help_active = false;
    var theory_active = false;
    var container;
    var task_number = 1;
    var variant;
    var data_file;

    function show_help() {
        if (!help_active) {
            help_active = true;
            $(".block_help").css("display", "block");
            $(".btn_help").attr("value", "Вернуться");
            let button_theory = document.querySelector('.btn_theory');
            button_theory.classList.add("not_active");
            button_theory.disabled = true;
        } else {
            help_active = false;
            $(".block_help").css("display", "none");
            $(".btn_help").attr("value", "Справка");
            let button_theory = document.querySelector('.btn_theory');
            button_theory.classList.remove("not_active");
            button_theory.disabled = false;
        }
    }

    function show_theory() {
        if (!theory_active) {
            theory_active = true;
            let theory_blocks = document.querySelectorAll('.block_theory');
            theory_blocks[task_number - 1].style.display = 'block';
            $(".btn_theory").attr("value", "Вернуться");
            let button_help = document.querySelector('.btn_help');
            button_help.classList.add("not_active");
            button_help.disabled = true;

        } else {
            theory_active = false;
            let theory_blocks = document.querySelectorAll('.block_theory');
            theory_blocks[task_number - 1].style.display = 'none';
            $(".btn_theory").attr("value", "Теория");
            let button_help = document.querySelector('.btn_help');
            button_help.classList.remove("not_active");
            button_help.disabled = false;
        }
    }

    function check_buttons() {
        if (task_number === 1) {
            let button_prev = document.querySelector('.btn_prev');
            button_prev.classList.add("not_active");
            button_prev.disabled = true;
        } else if (task_number === 4) {
            let button_next = document.querySelector('.btn_next');
            button_next.classList.add("not_active");
            button_next.disabled = true;
        } else {
            let button_prev = document.querySelector('.btn_prev');
            button_prev.classList.remove("not_active");
            button_prev.disabled = false;
            let button_next = document.querySelector('.btn_next');
            button_next.classList.remove("not_active");
            button_next.disabled = false;
        }
    }

    function prev_task() {
        let answer_blocks = document.querySelectorAll('.vlab_answers');
        answer_blocks[task_number - 1].style.display = 'none';
        if (task_number > 1) {
            task_number = task_number - 1;
        }
        check_buttons();
        answer_blocks[task_number - 1].style.display = 'block';
    }

    function next_task() {
        let answer_blocks = document.querySelectorAll('.vlab_answers');
        answer_blocks[task_number - 1].style.display = 'none';
        if (task_number < 4) {
            task_number = task_number + 1;
        }
        check_buttons();
        answer_blocks[task_number - 1].style.display = 'block';
    }

    function setVariant() {
        if ($("#preGeneratedCode") !== null) {
            var raw_variant = document.getElementById("preGeneratedCode").value;
            //var raw_variant = [746, 751, 749, 686, 698, 669, 658, 663, 762, 844, 760, 776, 807, 773, 690, 700, 777, 761, 810, 818, 779, 806, 779, 725, 770, 797, 765, 828, 802, 806, 825, 769, 769, 726, 781, 841, 813, 824, 822, 764, 761, 782, 752, 790, 790, 719, 757, 721, 713, 757, 704, 729, 726, 675, 706, 716, 697, 749, 731, 753, 802, 743, 788, 781, 729, 794, 816, 768, 764, 786, 710, 709, 722, 690, 728, 730, 705, 746, 748, 701, 741, 733, 691, 743, 726, 721, 749, 698, 720, 743, 684, 714, 726, 710, 789, 774, 719, 773, 758, 704, 744, 757, 720, 764, 802, 748, 761, 782, 756, 783, 799, 765, 745, 779, 730, 718, 763, 773, 725, 767, 780, 726, 751, 754, 705, 751, 780, 730, 731, 752, 740, 737, 759, 735, 718, 783, 787, 724, 772, 790, 741, 715, 761, 766, 741, 766, 730, 709, 752, 733, 723, 772, 744, 723, 750, 714, 711, 771, 734, 768, 817, 780, 756, 768, 711, 707, 765, 740, 763, 766, 737, 758, 771, 723, 756, 737, 783, 758, 736, 767, 721, 737, 772, 729, 780, 775, 724, 740, 728, 720, 790, 773, 750, 775, 718, 732, 755, 726, 770, 757, 708, 736, 697, 741, 783, 711, 743, 745, 699, 744, 693, 713, 740, 677, 729, 762, 725, 753, 801, 754, 780, 791, 736, 761, 761, 709, 702, 717, 687, 683, 702, 696, 645, 635, 615, 653, 667, 699, 646, 642, 704, 774, 784, 784, 767, 740, 675, 703, 770, 832, 828, 752, 798, 808, 741, 743, 799, 771, 795, 823, 792, 738, 745, 716, 718, 764, 761, 742, 753, 710, 700, 737, 726, 709, 751, 750, 712, 729, 704, 679, 719, 726, 684, 715, 727, 685, 718, 743, 747, 796, 802, 711, 740, 738, 708, 755, 756, 735, 795, 758];

            /*console.log(raw_variant);*/
            if (raw_variant !== "") {
                raw_variant = raw_variant.substring(1, (raw_variant.length - 1));
                variant = raw_variant.split(', ');


            } else {
                //raw_variant = "[746,751,749,686,698,669,658,663,762,844,760,776,807,773,690,700,777,761,810,818,779,806,779,725,770,797,765,828,802,806,825,769,769,726,781,841,813,824,822,764,761,782,752,790,790,719,757,721,713,757,704,729,726,675,706,716,697,749,731,753,802,743,788,781,729,794,816,768,764,786,710,709,722,690,728,730,705,746,748,701,741,733,691,743,726,721,749,698,720,743,684,714,726,710,789,774,719,773,758,704,744,757,720,764,802,748,761,782,756,783,799,765,745,779,730,718,763,773,725,767,780,726,751,754,705,751,780,730,731,752,740,737,759,735,718,783,787,724,772,790,741,715,761,766,741,766,730,709,752,733,723,772,744,723,750,714,711,771,734,768,817,780,756,768,711,707,765,740,763,766,737,758,771,723,756,737,783,758,736,767,721,737,772,729,780,775,724,740,728,720,790,773,750,775,718,732,755,726,770,757,708,736,697,741,783,711,743,745,699,744,693,713,740,677,729,762,725,753,801,754,780,791,736,761,761,709,702,717,687,683,702,696,645,635,615,653,667,699,646,642,704,774,784,784,767,740,675,703,770,832,828,752,798,808,741,743,799,771,795,823,792,738,745,716,718,764,761,742,753,710,700,737,726,709,751,750,712,729,704,679,719,726,684,715,727,685,718,743,747,796,802,711,740,738,708,755,756,735,795,758]";
                let task_text = document.querySelector('.block_task');
                task_text.innerHTML = "Произошла ошибка! Попробуйте перезагрузить страницу!";
            }

        } else {
            //raw_variant = [746,751,749,686,698,669,658,663,762,844,760,776,807,773,690,700,777,761,810,818,779,806,779,725,770,797,765,828,802,806,825,769,769,726,781,841,813,824,822,764,761,782,752,790,790,719,757,721,713,757,704,729,726,675,706,716,697,749,731,753,802,743,788,781,729,794,816,768,764,786,710,709,722,690,728,730,705,746,748,701,741,733,691,743,726,721,749,698,720,743,684,714,726,710,789,774,719,773,758,704,744,757,720,764,802,748,761,782,756,783,799,765,745,779,730,718,763,773,725,767,780,726,751,754,705,751,780,730,731,752,740,737,759,735,718,783,787,724,772,790,741,715,761,766,741,766,730,709,752,733,723,772,744,723,750,714,711,771,734,768,817,780,756,768,711,707,765,740,763,766,737,758,771,723,756,737,783,758,736,767,721,737,772,729,780,775,724,740,728,720,790,773,750,775,718,732,755,726,770,757,708,736,697,741,783,711,743,745,699,744,693,713,740,677,729,762,725,753,801,754,780,791,736,761,761,709,702,717,687,683,702,696,645,635,615,653,667,699,646,642,704,774,784,784,767,740,675,703,770,832,828,752,798,808,741,743,799,771,795,823,792,738,745,716,718,764,761,742,753,710,700,737,726,709,751,750,712,729,704,679,719,726,684,715,727,685,718,743,747,796,802,711,740,738,708,755,756,735,795,758];
            let task_text = document.querySelector('.block_task');
            task_text.innerHTML = "Произошла ошибка! Попробуйте перезагрузить страницу!";
        }

        let button_txt = document.querySelector('.file_txt_button');
        button_txt.disabled = false;
        let button_xlsx = document.querySelector('.file_xlsx_button');
        button_xlsx.disabled = false;
        //console.log(variant);
    }

    function write_to_file(file_type) {
        data_file = XLSX.utils.book_new();
        if (file_type === "txt") {
            var ws = XLSX.utils.aoa_to_sheet([variant]);
        } else {
            var row_variant = variant.map(elem => [elem]);
            var ws = XLSX.utils.aoa_to_sheet(row_variant);
        }
        XLSX.utils.book_append_sheet(data_file, ws);
    }

    function download_file_txt() {
        write_to_file("txt");
        XLSX.writeFile(data_file, "data.txt");
    }

    function download_file_xlsx() {
        write_to_file("xlsx");
        XLSX.writeFile(data_file, "data.xlsx");
    }

    function removeBlankAnswer(str) {
        if (str === "") {
            return "0";
        } else {
            return str;
        }
    }


    function draw_plot(data_x, data_y) {

        var color = "steelblue";
        var data = [];
        var margin = {top: 20, right: 30, bottom: 40, left: 50},
            width = 520 - margin.left - margin.right,
            height = 260 - margin.top - margin.bottom;

        data_x[data_x.length - 1] = +data_x[data_x.length - 1];
        for (var i = 0, bin; i < data_y.length; i++) {
            bin = {};
            bin.x = data_x[i];
            bin.y = data_y[i];
            data[i] = bin;
        }

        var xMax = d3.max(data_x);
        var xMin = d3.min(data_x);

        var yMax = d3.max(data, function (d) {
            return d.y
        });
        var yMin = d3.min(data, function (d) {
            return d.y
        });

        var colorScale = d3.scale.linear()
            .domain([yMin, yMax])
            .range([d3.rgb(color).brighter(), d3.rgb(color).darker()]);

        let svg_container = document.querySelector('svg');
        if (svg_container !== null) {
            svg_container.parentNode.removeChild(svg_container);
        }

        var x = d3.scale.linear()
            .domain([xMin, xMax])
            .range([0, width]);

        var y = d3.scale.linear()
            .domain([0, yMax])
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var svg = d3.select(".block_hist").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var bar = svg.selectAll(".bar")
            .data(data)
            .enter().append("g")
            .attr("class", "bar")
            .attr("transform", function (d) {
                return "translate(" + x(d.x) + "," + y(d.y) + ")";
            });

        bar.append("rect")
            .attr("x", 1)
            .attr("width", (Math.floor(width / data_x.length)))
            .attr("height", function (d) {
                return height - y(d.y);
            })
            .attr("fill", function (d) {
                return colorScale(d.y)
            });

        bar.append("text")
            .attr("dy", ".75em")
            .attr("y", -18)
            .attr("x", (Math.floor(width / data_x.length)) / 2)
            .attr("text-anchor", "middle")
            .text(function (d) {
                return d.y;
            });

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .call(g => g.append("text")
                .attr("x", 260)
                .attr("y", 30)
                .attr("fill", "#000")
                .attr("font-weight", "bold")
                .attr("text-anchor", "end")
                .text("Кардиоинтервалы, мс"));


        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .call(g => g.append("text")
                .attr("x", -125)
                .attr("y", -40)
                .attr("text-anchor", "start")
                .attr("transform", "rotate(270)")
                .attr("font-weight", "bold")
                .text("Частота"));
    }

    function draw_plot_values(data_x, data_y, amo, mo, mxdmn) {

        let svg = d3.select('svg');
        // Стираем все линии, стрелочки, подписи, чтобы мало ли не наложились на предыдущие
        var lines = svg.selectAll("line");
        lines.remove();
        var markers = svg.selectAll("marker");
        markers.remove();
        var texts = svg.selectAll("text.value-text");
        texts.remove();

        //Получаем среднее значение по х из исходных данных - чтобы красиво стрелочка рисовалась
        // И тоже масштабируем

        let sum = 0;
        for (var i = 0; i < variant.length; i++) {
            variant[i] = +variant[i];
            sum += variant[i];
        }
        let x_min = data_x[0];
        let x_max = data_x[data_x.length - 1];

        let y_min = d3.min(data_y);
        let y_max = d3.max(data_y);
        var hist_comment = $(".hist_comment")[0];

        if (((amo >= (y_min * 100)) && (amo <= (y_max * 100)) && ((mo >= x_min) && (mo <= x_max) || (mo === 0))) && (mxdmn >= 0) && (mxdmn <= x_max - x_min)) {

            hist_comment.style.display = "none";
            hist_comment.innerHTML = "";
            let hist_div = document.querySelector('.block_hist');
            hist_div.classList.remove("svg_hidden");

            let middle = (x_max + x_min) / 2;
            let scaled_middle = (middle - x_min) * (450 / (x_max - x_min)) + 40;
            //console.log(scaled_middle);

            //Масштабируем mxdmn под длину оси
            let scaled_mxdmn = mxdmn * (450 / (x_max - x_min));

            //Масштабируем amo под длину оси
            let scaled_amo = amo * (200 / ((y_max - y_min) * 100)) - 6;
            //console.log(scaled_amo);

            //arrow-right
            var red_arrow_right = svg.append("svg:defs").append("svg:marker")
                .attr("id", "red_arrow_right")
                .attr("refX", 6)
                .attr("refY", 6)
                .attr("markerWidth", 30)
                .attr("markerHeight", 30)
                .attr("orient", "auto")
                .append("path")
                .attr("d", "M 0 0 12 6 0 12 3 6")
                .style("fill", "red");

            //arrow-left
            var red_arrow_left = svg.append("svg:defs").append("svg:marker")
                .attr("id", "red_arrow_left")
                .attr("refX", 1)
                .attr("refY", 6)
                .attr("markerWidth", 30)
                .attr("markerHeight", 30)
                .attr("orient", "auto")
                .append("path")
                .attr("d", "M 0 6 L 12 0 L 9 6 L 12 12 Z")
                .style("fill", "red");

            var green_arrow_right = svg.append("svg:defs").append("svg:marker")
                .attr("id", "green_arrow_right")
                .attr("refX", 6)
                .attr("refY", 6)
                .attr("markerWidth", 30)
                .attr("markerHeight", 30)
                .attr("orient", "auto")
                .append("path")
                .attr("d", "M 0 0 12 6 0 12 3 6")
                .style("fill", "green");

            var green_arrow_left = svg.append("svg:defs").append("svg:marker")
                .attr("id", "green_arrow_left")
                .attr("refX", 1)
                .attr("refY", 6)
                .attr("markerWidth", 30)
                .attr("markerHeight", 30)
                .attr("orient", "auto")
                .append("path")
                .attr("d", "M 0 6 L 12 0 L 9 6 L 12 12 Z")
                .style("fill", "green");

            //Линия для mxdmn
            if (mxdmn !== 0) {
                var variant_min = d3.min(variant);
                var variant_max = d3.max(variant);
                if (mxdmn === (variant_max - variant_min) && (Math.floor(variant_min / 100) * 100 === x_min) && (Math.ceil(variant_max / 100) * 100 === x_max)) {
                    // Если ввели правильное значение и гистограмма строится в правильных пределах, то идеально ровно отрисовываем линию
                    //console.log(variant_min);
                    //console.log(variant_max);

                    svg.append("line")
                        .attr("x1", (Math.floor((variant_min - x_min) * (450 / (x_max - x_min))) + 40))
                        .attr("y1", 240)
                        .attr("x2", (Math.floor((variant_min - x_min + mxdmn) * (450 / (x_max - x_min))) + 40))
                        .attr("y2", 240)
                        .attr("stroke-width", 1)
                        .attr("stroke", "green")
                        .attr("marker-start", "url(#green_arrow_left)")
                        .attr("marker-end", "url(#green_arrow_right)");
                } else {
                    //Иначе рисуем от примерного центра
                    svg.append("line")
                        .attr("x1", (Math.floor(scaled_middle - (scaled_mxdmn / 2))))
                        .attr("y1", 240)
                        .attr("x2", (Math.floor(scaled_middle + (scaled_mxdmn / 2))))
                        .attr("y2", 240)
                        .attr("stroke-width", 1)
                        .attr("stroke", "green")
                        .attr("marker-start", "url(#green_arrow_left)")
                        .attr("marker-end", "url(#green_arrow_right)");
                }
                // И рисуем стрелочку и надпись в углу, для обозначенияя
                svg.append("line")
                    .attr("x1", 400)
                    .attr("y1", 15)
                    .attr("x2", 450)
                    .attr("y2", 15)
                    .attr("stroke-width", 1)
                    .attr("stroke", "green")
                    .attr("marker-start", "url(#green_arrow_left)")
                    .attr("marker-end", "url(#green_arrow_right)");

                svg.append("text")
                    .attr("class", "value-text")
                    .attr("x", 460)
                    .attr("y", 20)
                    .text("MxDMn")
                    .attr("font-family", "sans-serif")
                    .attr("font-size", "12px")
                    .attr("fill", "green");
            }

            if (amo !== 0) {
                if (mo === 0) {
                    //Линия для amo
                    //Если не ввели mo, то рисуем "по центру"
                    svg.append("line")
                        .attr("x1", scaled_middle)
                        .attr("y1", (215 - scaled_amo))
                        .attr("x2", scaled_middle)
                        .attr("y2", 215)
                        .attr("stroke-width", 1)
                        .attr("stroke", "red")
                        .attr("marker-start", "url(#red_arrow_left)")
                        .attr("marker-end", "url(#red_arrow_right)");
                } else {
                    //Масштабируем mo под длину оси (40 - padding слева)
                    let scaled_mo = (mo - x_min) * (450 / (x_max - x_min)) + 40;
                    //Если ввели mo, то рисуем по координате mo
                    svg.append("line")
                        .attr("x1", scaled_mo)
                        .attr("y1", (215 - scaled_amo))
                        .attr("x2", scaled_mo)
                        .attr("y2", 215)
                        .attr("stroke-width", 1)
                        .attr("stroke", "red")
                        .attr("marker-start", "url(#red_arrow_left)")
                        .attr("marker-end", "url(#red_arrow_right)");


                }
                // И рисуем стрелочку и надпись в углу, для обозначенияя
                svg.append("line")
                    .attr("x1", 400)
                    .attr("y1", 35)
                    .attr("x2", 450)
                    .attr("y2", 35)
                    .attr("stroke-width", 1)
                    .attr("stroke", "red")
                    .attr("marker-start", "url(#red_arrow_left)")
                    .attr("marker-end", "url(#red_arrow_right)");

                svg.append("text")
                    .attr("class", "value-text")
                    .attr("x", 460)
                    .attr("y", 40)
                    .text("AMo")
                    .attr("font-family", "sans-serif")
                    .attr("font-size", "12px")
                    .attr("fill", "red");
            }

            if (mo !== 0) {
                //Масштабируем mo под длину оси (40 - padding слева)
                let scaled_mo = (mo - x_min) * (450 / (x_max - x_min)) + 40;

                //Рисуем маленькую риску-метку с подписью для mo
                svg.append("line")
                    .attr("x1", scaled_mo)
                    .attr("y1", 215)
                    .attr("x2", scaled_mo)
                    .attr("y2", 225)
                    .attr("stroke-width", 1)
                    .attr("stroke", "red");

                svg.append("text")
                    .attr("class", "value-text")
                    .attr("x", (scaled_mo - 5))
                    .attr("y", 235)
                    .text("Mo")
                    .attr("font-family", "sans-serif")
                    .attr("font-size", "12px")
                    .attr("fill", "red");
            }


        } else {

            let hist_div = document.querySelector('.block_hist');
            hist_div.classList.add("svg_hidden");
            hist_comment.innerHTML = "Проверьте введенные данные! Введенные значения лежат за пределами осей гистограммы!";
            hist_comment.style.display = "block";
        }


    }

    function compareNumeric(a, b) {
        return a - b;
    }

    function check_if_NAN(a){

        if(isNaN(+a.value)){
            a.classList.add("input_is_NAN");
            a.classList.remove("input_is_not_NAN");
        } else{
            a.classList.remove("input_is_NAN");
            a.classList.add("input_is_not_NAN");
        }

    }

    return {


        setPreviosSolution: function (str) {
        },

        setMode: function (str) {
        },

        //Инициализация ВЛ
        init: function () {
            container = $("#jsLab")[0];
            container.innerHTML = vlab_code;
            //document.getElementById("tool").innerHTML = this.tool;

            task_number = 1;


            $(".btn_help").click(function () {
                show_help();
            });

            $(".btn_theory").click(function () {
                show_theory();
            });

            $(".btn_prev").click(function () {
                prev_task();
            });

            $(".btn_next").click(function () {
                next_task();
            });

            $(".btn_hist").click(function () {
                    var histIntervals = removeBlankAnswer(document.getElementById("HistIntervals_value").value);
                    var histValues = removeBlankAnswer(document.getElementById("HistValues_value").value);


                    var hist_comment = $(".hist_comment")[0];
                    if ((histIntervals === "0") || (histValues === "0")) {
                        let hist_div = document.querySelector('.block_hist');
                        hist_div.classList.add("svg_hidden");
                        hist_comment.innerHTML = "Вы не ввели данные!";
                        hist_comment.style.display = "block";
                    } else {

                        var data_x = histIntervals.split(",");
                        var data_y = histValues.split(",");

                        var not_number_data = false;
                        for (var i = 0, bin; i < data_y.length; i++) {
                            data_x[i] = +data_x[i];
                            data_y[i] = +parseFloat(data_y[i]).toFixed(3);
                            if (isNaN(data_x[i]) || isNaN(data_y[i])) {
                                not_number_data = true;
                            }
                        }

                        data_x[(data_x.length - 1)] = +data_x[(data_x.length - 1)];
                        if (isNaN(data_x[(data_x.length - 1)])) {
                            not_number_data = true;
                        }


                        if (not_number_data) {
                            let hist_comment = document.querySelector('.hist_comment');
                            hist_comment.innerHTML = "Проверьте введенные данные! Все элементы должны быть числами!";
                            let hist_div = document.querySelector('.block_hist');
                            hist_div.classList.add("svg_hidden");
                            hist_comment.style.display = "block";
                        } else {

                            if (data_x.length === (data_y.length + 1)) {

                                var not_sorted_data_x = data_x.slice();
                                data_x.sort(compareNumeric);

                                var unique = true;
                                for (i = 1; i < data_x.length; i++) {
                                    if (data_x[i] === data_x[i - 1]) {
                                        unique = false;
                                    }
                                }

                                if ((data_x.join(",") === (not_sorted_data_x.join(","))) && unique) {
                                    var sum_y = true;
                                    for (i = 0; i < data_y.length; i++) {
                                        if (data_y[i] > 1) {
                                            sum_y = false;
                                        }
                                    }
                                    if (sum_y) {
                                        hist_comment.style.display = "none";
                                        hist_comment.innerHTML = "";
                                        let hist_div = document.querySelector('.block_hist');
                                        hist_div.classList.remove("svg_hidden");
                                        draw_plot(data_x, data_y);
                                    } else {
                                        let hist_div = document.querySelector('.block_hist');
                                        hist_div.classList.add("svg_hidden");
                                        hist_comment.innerHTML = "Проверьте введенные данные! Все значения по оси Y должны быть меньше 1!";
                                        hist_comment.style.display = "block";
                                    }

                                } else {
                                    let hist_div = document.querySelector('.block_hist');
                                    hist_div.classList.add("svg_hidden");
                                    hist_comment.innerHTML = "Проверьте введенные данные! Данные по оси Х должны идти в порядке возрастания!";
                                    hist_comment.style.display = "block";
                                }

                            } else {
                                let hist_div = document.querySelector('.block_hist');
                                hist_div.classList.add("svg_hidden");
                                hist_comment.innerHTML = "Проверьте введенные данные! Количество введенных значений для оси Х должно быть на 1 больше количества введенных значений для оси Y!";
                                hist_comment.style.display = "block";
                            }
                        }

                    }
                }
            );

            $(".btn_values").click(function () {
                var histIntervals = removeBlankAnswer(document.getElementById("HistIntervals_value").value);

                var histValues = removeBlankAnswer(document.getElementById("HistValues_value").value);
                var mo = removeBlankAnswer(document.getElementById("Mo_value").value);
                var amo = removeBlankAnswer(document.getElementById("AMo_value").value);
                var mxdmn = removeBlankAnswer(document.getElementById("MxDMn_value").value);

                var hist_comment = $(".hist_comment")[0];
                if ((histIntervals === "0") || (histValues === "0")) {

                    let hist_div = document.querySelector('.block_hist');
                    hist_div.classList.add("svg_hidden");
                    hist_comment.innerHTML = "Пожалуйста, постройте гистограмму, прежде чем приступать к этому этапу!";
                    hist_comment.style.display = "block";

                } else if ((mo === "0") && (amo === "0") && (mxdmn === "0")) {

                    let hist_div = document.querySelector('.block_hist');
                    hist_div.classList.add("svg_hidden");
                    hist_comment.innerHTML = "Вы не ввели значения параметров!";
                    hist_comment.style.display = "block";

                } else {

                    var data_x = histIntervals.split(",");
                    var data_y = histValues.split(",");

                    var not_number_data = false;
                    for (var i = 0, bin; i < data_y.length; i++) {
                        data_x[i] = +data_x[i];
                        data_y[i] = +data_y[i];
                        if (isNaN(data_x[i]) || isNaN(data_y[i])) {
                            not_number_data = true;
                        }
                    }

                    data_x[(data_x.length - 1)] = +data_x[(data_x.length - 1)];
                    amo = +amo;
                    mo = +mo;
                    mxdmn = +mxdmn;

                    if ((isNaN(data_x[data_x.length - 1])) || (isNaN(amo)) || (isNaN(mo)) || (isNaN(mxdmn))) {
                        not_number_data = true;
                    }

                    if (not_number_data) {

                        let hist_comment = document.querySelector('.hist_comment');
                        hist_comment.innerHTML = "Проверьте введенные данные! Все элементы должны быть числами!";
                        let hist_div = document.querySelector('.block_hist');
                        hist_div.classList.add("svg_hidden");
                        hist_comment.style.display = "block";

                    } else {

                        hist_comment.style.display = "none";
                        hist_comment.innerHTML = "";
                        let hist_div = document.querySelector('.block_hist');
                        hist_div.classList.remove("svg_hidden");
                        draw_plot_values(data_x, data_y, amo, mo, mxdmn);

                    }
                }
            });

            //получение варианта задания
            setVariant();

            $(".file_txt_button").click(function () {
                download_file_txt();
            });

            $(".file_xlsx_button").click(function () {
                download_file_xlsx();
            });

            $(".input_is_not_NAN").change(function () {
                check_if_NAN(this);
            })

            $(".input_is_NAN").change(function () {
                check_if_NAN(this);
            })
        },

        getResults: function () {
            var m = removeBlankAnswer(document.getElementById("M_value").value);
            var sdnn = removeBlankAnswer(document.getElementById("SDNN_value").value);
            var cv = removeBlankAnswer(document.getElementById("CV_value").value);
            var rmssd = removeBlankAnswer(document.getElementById("RMSSD_value").value);

            var histIntervals = removeBlankAnswer(document.getElementById("HistIntervals_value").value);
            var histValues = removeBlankAnswer(document.getElementById("HistValues_value").value);

            var mo = removeBlankAnswer(document.getElementById("Mo_value").value);
            var amo = removeBlankAnswer(document.getElementById("AMo_value").value);
            var mxdmn = removeBlankAnswer(document.getElementById("MxDMn_value").value);

            var si = removeBlankAnswer(document.getElementById("SI_value").value);

            let radio_answers = document.querySelectorAll('input[type="radio"]');
            for (let elem in radio_answers) {
                if (radio_answers[elem].checked)
                    var sidescription = radio_answers[elem].value;
            }


            var answer = {
                m: m,
                histIntervals: histIntervals,
                histValues: histValues,
                sdnn: sdnn,
                si: si,
                mo: mo,
                rmssd: rmssd,
                amo: amo,
                sidescription: sidescription,
                cv: cv,
                mxdmn: mxdmn
            };

            var numb_answer = {
                m: m,
                sdnn: sdnn,
                si: si,
                mo: mo,
                rmssd: rmssd,
                amo: amo,
                cv: cv,
                mxdmn: mxdmn
            };

            var non_number = false;
            for(var key in numb_answer){
                if(isNaN(numb_answer[key])){
                    non_number=true;
                    answer[key] = 0;
                    //console.log(key);
                }
            }
            //console.log(answer);
           if(non_number){
                var block_hist = document.querySelector('.block_hist');
                var plot_comment = $(".hist_comment")[0];
                block_hist.classList.add("svg_hidden");

                plot_comment.innerHTML = "Проверьте данные! Все введенные значения должны быть числами!";
                plot_comment.style.display = "block";
            } else{
                return JSON.stringify(answer);
            }


            //return "{\"histIntervals\":[600,650,700,750,800,850,900,950,1000,1050,1100],\"histValues\":[0.0,0.023333333333333334,0.10333333333333333,0.14333333333333334,0.23666666666666666,0.32,0.15,0.013333333333333334,0.006666666666666667,0.0033333333333333335],\"sdnn\":66.8222190832563,\"m\":840.22,\"si\":4.6410442349528646E-7,\"mo\":875.0,\"rmssd\":47.813741185498614,\"amo\":0.32,\"sidescription\":\"Out of range\",\"cv\":0.07952943167653269,\"mxDmn\":394.0}"
        },
        calculateHandler: function (text, code) {

        },
        // для вызова метода calculate сервера - вызывать функцию ANT.calculate, она вызывает calculate на сервере и передает результат text и code, которые можно вызвать функцией calculateHandler
    }
}

var Vlab = init_lab();


