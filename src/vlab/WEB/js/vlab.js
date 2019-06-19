function init_lab() {

    var vlab_code = '<div class="vlab_setting">' +
        '<div class="block_title">' +
        '<div class="vlab_name">������������ ����� �������������� ���������� �����</div>' +
        '<input class="btn_help btn" type="button" value="�������" title="������� �� ������ � ������������"/>' +
        '<input class="btn_theory btn" type="button" value="������" title="������������� �������� ��� ��������"/>' +
        '</div>' +
        '<div class="block_task">' +
        '<div class="task_text">' +
        '<p>����������� ��� ����������� ���������, ��������� ������ ������ ��������.<br>�������� ���� �������� �������� - 3 ����� ����� �������</p>' +
        '<p>������ ������ �������� ����� ������� �����:</p>' +
        '<div class="file_buttons">' +
        '<input type="button" class="file_txt_button" value="���� � ������� txt" disabled>' +
        '<input type="button" class="file_xlsx_button" value="���� � ������� xlsx" disabled></div></div>' +
        '</div>' +
        '<div class="block_plot"><p class = "hist_comment">    </p>' +
        '<div class="block_hist">' +
        '</div>' +
        '</div>' +
        '<div class="vlab_answers answers_1">' +
        '<div class = "task_number">1/4</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="HistIntervals_value">�������� ����������������: </label></td>' +
        '<td><input type="text" ' +
        'id="HistIntervals_value">  ��</td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="HistValues_value">�������� �������: </label></td>' +
        '<td><input type="text" ' +
        'id="HistValues_value"></td>' +
        '</tr>' +
        '</table>' +
        '<input type="button" class="btn btn_hist" value="��������� �����������"/>' +
        '</div>' +
        '<div class="vlab_answers answers_2">' +
        '<div class = "task_number">2/4</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="M_value">�������� ��������� �: </label></td>' +
        '<td><input type="text" id="M_value" class = "input_is_not_NAN">  ��</td>' +
        '<td><label for="SDNN_value">�������� ��������� SDNN: </label></td>' +
        '<td><input type="text" id="SDNN_value" class = "input_is_not_NAN">  ��</td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="CV_value">�������� ��������� CV: </label></td>' +
        '<td><input type="text" id="CV_value" class = "input_is_not_NAN">  %</td>' +
        '<td><label for="RMSSD_value">�������� ��������� RMSSD: </label></td>' +
        '<td><input type="text" id="RMSSD_value" class = "input_is_not_NAN">  ��</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="vlab_answers answers_3">' +
        '<div class = "task_number">3/4</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="Mo_value">�������� ��������� �o: </label></td>' +
        '<td><input type="text" id="Mo_value" class = "input_is_not_NAN">  ��</td>' +
        '<td><label for="AMo_value">�������� ��������� AMo:</label></td>' +
        '<td><input type="text" id="AMo_value" class = "input_is_not_NAN"> %</td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="MxDMn_value">�������� ��������� �xDMn: </label></td>' +
        '<td><input type="text" id="MxDMn_value" class = "input_is_not_NAN">  ��</td>' +
        '</tr>' +
        '</table>' +
        '<input type="button" class="btn btn_values" value="���������� ���������"/>' +
        '</div>' +
        '<div class="vlab_answers answers_4">' +
        '<div class = "task_number">4/4</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="SI_value">�������� ��������� �� (SI): </label></td>' +
        '<td><input type="text" id="SI_value" class = "input_is_not_NAN"></td>' +
        '</tr>' +
        '</table>' +
        '<p>' +
        '�������� �����������, ������� ����� ����� ��������� ���������� ���������:<br>' +
        '<input type="radio" name="SIDescription" value="normal">������ ���������� � �����, ������� ��������� � ��������� �����<br>' +
        '<input type="radio" name="SIDescription" value="small increase" checked>������ ���������� ������������� ��������� �����, ������� ���������� ��������� ��������<br>' +
        '<input type="radio" name="SIDescription" value="big increase">������ ���������� ����������� ���� �����, ������� ���������� ������������ ��������<br>' +
        '</p>' +
        '</div>' +
        '<div class="block_control">' +
        '<input class="btn_prev btn not_active" type="button" value="� ����������� �����" disabled/>' +
        '<input class="btn_next btn" type="button" value="� ���������� �����"/>' +
        '</div>' +
        '<div class="block_help">' +
        '<h1>������� �� ������ � ������������</h1>' +
        '<p>� ������ ����������� ��� ���������� ��������� 4 �����: ��������� �����������, ���������� �������������� �������������� (M, SDNN, CV, RMSSD), ���������� �������������� ����������� (AMo, Mo, MxDMn), ���������� ������ ���������� (SI) � ������� ����� � ��������� ��������.</p>' +
        '<p>� �������� �������� ������ ������������ �������� ������ ���������������������, ������� ��������������� ��� ������������ ���������������� ��������� ����������� � RR-����������. </p>' +
        '<p>������ ������ �������� �� ������ �������, ����� �� ��������������� ������ � ������� ����� ������. �� ������ ������� ������ �����, ������� ������� ��� ������������� � ��������. ���� �� ����������� ������ �� �����-���� ����� ����������������, �� �� ����������� ������������ txt-����. ���� �� �� ����������� ������������ ������ � Excel, �� �� ����������� ������������ xlsx-����.</p>' +
        '<p>�� ������ ������������� ����� �������, ��������� ������ ����� ������, ��� ���� ��� ��������� ������ ����� ���������. �� ������ ��������� ����� � ����� �������, ������ ��������� ����������� ����� ������� �� ������ �� ���������� ������, ������� �� ����������� ��������� ����� ������ � ��� �������, � ������� ��� �����������.</p>' +
        '<p>� 1 � 3 ������ ���� ������, ����������� ������������ ��������� ������. ������ ����������� � ������� ��������� ������, ������� ��������� ��� ���������� ������ ������������. ������������ ������������ ��� ������� ����������� ���������� ������, ������ �� ������������� �� �������� ������������ �������� ���������� �������.</p>' +
        '<p>��� ������� ����� ���� �������� � ������������� ����������, ������� ����� �������, ����� �� ��������������� ������ � ������ ������� ���� ������. ����������, ����������� ������� ������������� ��� ��������, ��� ��� �� �������� ��� ����������� ���������� ��� ���������� �����, � ����� ������, � ������� ������ ���� ������������ ������ ��� ����, ����� ��� ����� �������� ����������.</p>' +
        '<p class = "text-center">������ �������!</p>' +
        '</div>' +
        '<div class="block_theory theory_1">' +
        '<h1>���������� �����������</h1>' +
        '<p>���������� ����������� - ���� �� �������� ��������������� �������������� ������. � ������ ����� ������� ��� ���������� ��������� �����������, ��������� ������ ������ ��������.</p>' +
        '<p>����������� � �������������� ���������� � ��� �������, ������������ ��������� ����������� ���������� �������������, ����������� �� ������ ������� �� ����. ����������� ����������� � �������� ��� ������������ ������ �� ��������� ����� �������������� ���������. </p>' +
        '<p>��� ���������� ����������� ���������� ��������� ��������� ��������:</p>' +
        '<ol>' +
        '<li>������� ��������� ��������, ������� ����� ��������� ������� �������, ����������� �� ��������� ����������. ���� ����� ��� ��������� ����� �����������, �� ��� �� �������� ������� �����������. � ����� ������ �� ����� ������������ ��������� �� 50 ��.<br>' +
        '��� ����, ����� ����������������� �������� �������, ������������ ��������� ������� �� ������ ������������ � ������������� �������� ����������:' +
        '<ul>' +
        '<li>� �������� ������������ �������� ���������� �����, ������������ ��� ���������� ������������ �������� ��������������� � �����, �������� 100, � ������� �������. ��������, ���� ����������� �������� ������ �������� ����� 733, �� ����������� �������������� ��� ����������� ����� ����� 700. ����������, ���� ����������� �������� ����� 799, �� ����������� �������������� ��� ����������� ����� ��� ����� ����� 700.</li>' +
        '<li class = "block_help_last_li">� �������� ������������� �������� ���������� �����, ������������ ��� ���������� ������������� �������� ��������������� � �����, �������� 100, � ������� �������. ��������, ���� ������������ �������� ������ �������� ����� 875, �� ������������ �������������� ��� ����������� ����� ����� 900. ����������, ���� ������������ �������� ����� 801, �� ����������� �������������� ��� ����������� ����� ��� ����� ����� 900.</li>' +
        '</ul>' +
        '��� ���������� ������� ��� ���������� ����������� ��� ���������, ������� ����� ����������� � ���������� �����������, �. �. ���� �� ����������, ��� ��� ������ �������� ����������� �������������� ����� 700, � ������������ - 900, �� � ���� ������ �� ������ ������: 700, 750, 800, 850, 900. ��� ����� �������� � ������� �����������, ����� �������. � ������ �� ������ �������������� ������� ������ ��������, ����� ���� � �������.' +
        '</li>' +
        '<li>������ ���������� ���������, ������� �������� ���������������� ������ � ������ �������� �����������. � ����� ������, ���� �������� ��������������� ������ �� ������� ���� ���������� ������������, �� �� �������, ��� ��� �������� �� ��������� � �������� ����������. ��������, ���� � ��� ���� ��������� 750-800 � 800-850, � �������� ��������������� ����� 800, �� �� �������, ��� ��� �������� �� ��������� 750-800.</li>' +
        '<li>��������� ���� ���������� ����������� - ���������� ������� ��������� � ������ ��������. ��� ����� ��� ���������� �������� �����, ���������� � ���������� ������, �� ����� ����� ���������������� � ����� ��������. ����� �������, � ��� ��������� ����� �����, ������ �� ������� ����� � �������� �� 0 �� 1. ������ ��� ����� ��� ���������� ������ � �����, � ��� �� �������, � ������� �� ������� ���������������. ����������, ��� ��� ���������� ����� � ������� ����� ���������� ������������ �����, � ����������� �������� - ����� �������. � ������ �� ������ �������������� ������� ������ ��������, ����� ����, ����� � �������.<br>' +
        '</li>' +
        '</ol>' +
        '<p>������ ������:</p>' +
        '<p class="block_help_answer_example"> �������� ����������������: 700, 750, 800, 850, 900</p>' +
        '<p class="block_help_answer_example"> �������� ������: 0.2, 0.3, 0.4, 0.1</p>' +
        '<p>��� ��������, ��� ������� ��������� � �������� 700-750 ����� 0.2, ������� ��������� � �������� 750-800 ����� 0.3, ������� ��������� � �������� 800-850 ����� 0.4, ������� ��������� � �������� 850-900 ����� 0.1.</p>' +
        '<p>�������� ��������: ����� �������� ���������������� �� 1 ������, ��� ����� �������� ������!</p>' +
        '<p>��� ������ � ������������� ������ � ������������ �� �������� ����� ���� ������ "��������� �����������", ������� ������������ ����������� �� ��������� ���� ������. ����� ��� ��������� ������ ������ �����, ��������, ���� �� ����� �������, �������� �� ����, ������� � �����, ��� �������� � ����� �������� ���������������� ��� ����� �������� ������. ��������� ����������� �� �������� ������������ ��� ���������� �������, ������ �� ������ ����������� ��������������� ���� ������������ ��������� ���� ����� ����������� ���������� �������.</p>' +
        '<p>�������� �������� ��������, ���� ����� �������: 3 ����� ����� �������.</p>' +
        '</div>' +
        '<div class="block_theory theory_2">' +
        '<h1>�������������� ��������������</h1>' +
        '<p><b>�������������� ������</b> ������� � ����� ���������� ����������� ��� ���������������� �������������� ������ �������� ���������� �������������� ���������� ����� (���) � ����������� ���������� �������. ��� �� ������������� ��������������������� (���) ��������������� ��� ������������ ���������������� ��������� ����������� � RR-����������. </p>' +
        '<p>� ���� ����� ������� ��� ���������� ��������� ��������� �������������� ��������������: </p>' +
        '<ul>' +
        '<li>�������������� �������� (�) <br><div class="theory_img"><img alt = "" src="theory_2_1.png" /> ��,</div><br> ��� Xi� �������� i-�� ���������������;</li>' +
        '<li>�������������������� ���������� ��� (SDNN) � ��� ��������� ���������� �������������� ������� ���������� RR �� ���� ��������������� ������, ���������� ��������� ������ ������������ ��������� ��������������<br><div class="theory_img"><img alt = "" src="theory_2_2.png" /> ��, </div><br>��� Xi� �������� i-�� ���������������; n � ���������� ���������������� �� ������;</li>' +
        '<li>����������� �������� (CV) ������� ������� ���������������� ������������ ����� ������������� ������ SDNN<br><div class="theory_img"><img alt = "" src="theory_2_3.png" /></div></li>' +
        '<li>�������������������� ���������� �������������� (RMSSD) - �������� ������� ���������� ������������������ ������ ������������ ��������� (����������� ������� ���������)<br><div class="theory_img"><img alt = "" src="theory_2_4.png" /> ��</div></li>' +
        '</ul>' +
        '<p>�������� �������� ��������: 3 ����� ����� �������.</p>' +
        '</div>' +
        '<div class="block_theory theory_3">' +
        '<h1>�������������� ��������������</h1>' +
        '<p>������ �������������� ������������� �� ���������� �������������� �������������� - ��� �� ��������������, ������� ��������� ����������� ����� �����������.</p>' +
        '<p>� ���� ����� ��� ���������� ��������� ��������� �������������� ��������������: </p>' +
        '<ul>' +
        '<li>���� (��)� ��� �������� ����� ������������� � ������ ������������ ���� �������� ���������������. ��� ���������� ������������� � ������� �������������� ������������ �������� �������� �� ����������� ����� ��������������� �������� �. � ����� ������ �������� �� ������������� �������� ��������� �����������, � ������� ��������� ���������� ���������� ��������. �������� ��������, ��������� ���� ������ �������� ���������!</li>' +
        '<li>��������� ���� (���) - ��� �������� ������� ���������, ���������������� ����, ���������� � ���������</li>' +
        '<li>������������ ������ (MxDMn) �������� ������� ������������� �������� ���������������� � ����������� ������������ ����. �� ����������� �� �������� ������������� Mx � ������������ Mn �������� ���������������� � ������� ��� �������� ��� ���������� ����� ���� �������. ��� ��� �� ����������� ������ ���������� ������ ��������, ����������� ������������ � ����������� �������� �� �������� ������! <br><div class="theory_img"><img alt = "" src="theory_3_1.png" /></div></li>' +
        '</ul>' +
        '<p>��� �������� �������� - ��� �����, ������� ����� ���������� ������.</p>' +
        '<p>��� ������ � ������������� ������ � ������������ �� �������� ����� ���� ������ "���������� ���������", ������� ��������� ���������� ��������� ������. ������������ ��������, ���� ��� ���� ��������� ����������� � ������ ���� �� ���� ��������. ����������, ��� ��� ����������� ��������� ����� � �������� ��������������� ���� �����������. ����������� ���������� ��������� �������� ������ ����� (��������, ���� ���� ������� ������ �������, ����� �����, ��� ��������� �������� ����� ��� ���� �����������). ����������� �� �������� ������������ ��� ���������� �������, ������ �� ������ ����������� ��������������� ���� ������������ ��������� ���� ����� ����������� ���������� �������.</p>' +
        '<p>�������� �������� ��������, ���� ����� �������: 3 ����� ����� �������.</p>' +
        '</div>' +
        '<div class="block_theory theory_4">' +
        '<h1>������ ����������</h1>' +
        '<p>��������� ������������ �������, �������� ������������� ��������� �� ����� ����������� ��� ���������� �������� ����������� ������������� �����, ����������� �������� ������������� ����������������, ����������� ���������� ���������� �� ������������ ���������� (���� ��������� ����). ������ ����� ���������� �������� ������������� ���� ������� � ���� ������� ����������� � ������������� ������ ������.<br>������������� ��� ����� ���� �������� ���������� ������ ����������� � �� ������. ���� ���������� ������� �������� <b>������� ���������� ������������ ������ (��) ��� ������-������� (SI)</b>: </p>' +
        '<br><div class="theory_img"><img alt = "" src="theory_4_1.png" /></div>' +
        '<p>����� �������, ������ ���������� �������� ������� ���������� ������������ ������ (������� ������������ ���������� ����������� ���������� ��������� ��� �����������). � ����� �� ���������� � �������� �� 150 �������� ������. ���� ���������� ����� ������������ � �������� ������ ������������� ������� �������. ��������� �������� (����������, �������������, ����������) ����������� �� �� �������� 150-300 ������. ��� ������������ ��������� �� ������ �� �������� ����� 300 ������.</p>' +
        '<p>����������, ��� � ���� ���������� �� ������������ ������������, �. �. ��� ��������� ����������� ���������� ���������� �������� �� � ��������.</p>' +
        '<p>�������� �������� ��������, ���� ����� �������: 3 ����� ����� �������.</p>' +
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
            $(".btn_help").attr("value", "���������");
            let button_theory = document.querySelector('.btn_theory');
            button_theory.classList.add("not_active");
            button_theory.disabled = true;
        } else {
            help_active = false;
            $(".block_help").css("display", "none");
            $(".btn_help").attr("value", "�������");
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
            $(".btn_theory").attr("value", "���������");
            let button_help = document.querySelector('.btn_help');
            button_help.classList.add("not_active");
            button_help.disabled = true;

        } else {
            theory_active = false;
            let theory_blocks = document.querySelectorAll('.block_theory');
            theory_blocks[task_number - 1].style.display = 'none';
            $(".btn_theory").attr("value", "������");
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
                task_text.innerHTML = "��������� ������! ���������� ������������� ��������!";
            }

        } else {
            //raw_variant = [746,751,749,686,698,669,658,663,762,844,760,776,807,773,690,700,777,761,810,818,779,806,779,725,770,797,765,828,802,806,825,769,769,726,781,841,813,824,822,764,761,782,752,790,790,719,757,721,713,757,704,729,726,675,706,716,697,749,731,753,802,743,788,781,729,794,816,768,764,786,710,709,722,690,728,730,705,746,748,701,741,733,691,743,726,721,749,698,720,743,684,714,726,710,789,774,719,773,758,704,744,757,720,764,802,748,761,782,756,783,799,765,745,779,730,718,763,773,725,767,780,726,751,754,705,751,780,730,731,752,740,737,759,735,718,783,787,724,772,790,741,715,761,766,741,766,730,709,752,733,723,772,744,723,750,714,711,771,734,768,817,780,756,768,711,707,765,740,763,766,737,758,771,723,756,737,783,758,736,767,721,737,772,729,780,775,724,740,728,720,790,773,750,775,718,732,755,726,770,757,708,736,697,741,783,711,743,745,699,744,693,713,740,677,729,762,725,753,801,754,780,791,736,761,761,709,702,717,687,683,702,696,645,635,615,653,667,699,646,642,704,774,784,784,767,740,675,703,770,832,828,752,798,808,741,743,799,771,795,823,792,738,745,716,718,764,761,742,753,710,700,737,726,709,751,750,712,729,704,679,719,726,684,715,727,685,718,743,747,796,802,711,740,738,708,755,756,735,795,758];
            let task_text = document.querySelector('.block_task');
            task_text.innerHTML = "��������� ������! ���������� ������������� ��������!";
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
                .text("���������������, ��"));


        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .call(g => g.append("text")
                .attr("x", -125)
                .attr("y", -40)
                .attr("text-anchor", "start")
                .attr("transform", "rotate(270)")
                .attr("font-weight", "bold")
                .text("�������"));
    }

    function draw_plot_values(data_x, data_y, amo, mo, mxdmn) {

        let svg = d3.select('svg');
        // ������� ��� �����, ���������, �������, ����� ���� �� �� ���������� �� ����������
        var lines = svg.selectAll("line");
        lines.remove();
        var markers = svg.selectAll("marker");
        markers.remove();
        var texts = svg.selectAll("text.value-text");
        texts.remove();

        //�������� ������� �������� �� � �� �������� ������ - ����� ������� ��������� ����������
        // � ���� ������������

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

            //������������ mxdmn ��� ����� ���
            let scaled_mxdmn = mxdmn * (450 / (x_max - x_min));

            //������������ amo ��� ����� ���
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

            //����� ��� mxdmn
            if (mxdmn !== 0) {
                var variant_min = d3.min(variant);
                var variant_max = d3.max(variant);
                if (mxdmn === (variant_max - variant_min) && (Math.floor(variant_min / 100) * 100 === x_min) && (Math.ceil(variant_max / 100) * 100 === x_max)) {
                    // ���� ����� ���������� �������� � ����������� �������� � ���������� ��������, �� �������� ����� ������������ �����
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
                    //����� ������ �� ���������� ������
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
                // � ������ ��������� � ������� � ����, ��� ������������
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
                    //����� ��� amo
                    //���� �� ����� mo, �� ������ "�� ������"
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
                    //������������ mo ��� ����� ��� (40 - padding �����)
                    let scaled_mo = (mo - x_min) * (450 / (x_max - x_min)) + 40;
                    //���� ����� mo, �� ������ �� ���������� mo
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
                // � ������ ��������� � ������� � ����, ��� ������������
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
                //������������ mo ��� ����� ��� (40 - padding �����)
                let scaled_mo = (mo - x_min) * (450 / (x_max - x_min)) + 40;

                //������ ��������� �����-����� � �������� ��� mo
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
            hist_comment.innerHTML = "��������� ��������� ������! ��������� �������� ����� �� ��������� ���� �����������!";
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

        //������������� ��
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
                        hist_comment.innerHTML = "�� �� ����� ������!";
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
                            hist_comment.innerHTML = "��������� ��������� ������! ��� �������� ������ ���� �������!";
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
                                        hist_comment.innerHTML = "��������� ��������� ������! ��� �������� �� ��� Y ������ ���� ������ 1!";
                                        hist_comment.style.display = "block";
                                    }

                                } else {
                                    let hist_div = document.querySelector('.block_hist');
                                    hist_div.classList.add("svg_hidden");
                                    hist_comment.innerHTML = "��������� ��������� ������! ������ �� ��� � ������ ���� � ������� �����������!";
                                    hist_comment.style.display = "block";
                                }

                            } else {
                                let hist_div = document.querySelector('.block_hist');
                                hist_div.classList.add("svg_hidden");
                                hist_comment.innerHTML = "��������� ��������� ������! ���������� ��������� �������� ��� ��� � ������ ���� �� 1 ������ ���������� ��������� �������� ��� ��� Y!";
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
                    hist_comment.innerHTML = "����������, ��������� �����������, ������ ��� ���������� � ����� �����!";
                    hist_comment.style.display = "block";

                } else if ((mo === "0") && (amo === "0") && (mxdmn === "0")) {

                    let hist_div = document.querySelector('.block_hist');
                    hist_div.classList.add("svg_hidden");
                    hist_comment.innerHTML = "�� �� ����� �������� ����������!";
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
                        hist_comment.innerHTML = "��������� ��������� ������! ��� �������� ������ ���� �������!";
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

            //��������� �������� �������
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

                plot_comment.innerHTML = "��������� ������! ��� ��������� �������� ������ ���� �������!";
                plot_comment.style.display = "block";
            } else{
                return JSON.stringify(answer);
            }


            //return "{\"histIntervals\":[600,650,700,750,800,850,900,950,1000,1050,1100],\"histValues\":[0.0,0.023333333333333334,0.10333333333333333,0.14333333333333334,0.23666666666666666,0.32,0.15,0.013333333333333334,0.006666666666666667,0.0033333333333333335],\"sdnn\":66.8222190832563,\"m\":840.22,\"si\":4.6410442349528646E-7,\"mo\":875.0,\"rmssd\":47.813741185498614,\"amo\":0.32,\"sidescription\":\"Out of range\",\"cv\":0.07952943167653269,\"mxDmn\":394.0}"
        },
        calculateHandler: function (text, code) {

        },
        // ��� ������ ������ calculate ������� - �������� ������� ANT.calculate, ��� �������� calculate �� ������� � �������� ��������� text � code, ������� ����� ������� �������� calculateHandler
    }
}

var Vlab = init_lab();


