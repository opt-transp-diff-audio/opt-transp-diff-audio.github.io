/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
// var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
//   msg = '<span class="msg">Current pair: ';
// $('.msg').html(msg + input + '</span>');
	var folder = $(this).parents('.dropdown').find('input').val();
	var vcpairhtml = ' \
	<table class="wrapper"> \
		<tbody style="margin-right: auto; text-align: center;"> \
			<tr> \
				<td></td> \
				<td><b>Source</b></td> \
				<td>Diff-OT-GG (Ours)</td> \
				<td>Timbretron</td> \
			</tr> \
			<tr> \
				<td></td> \
				<td><audio controls=""><source src="' + folder + '/source.wav"></audio></td> \
				<td><audio controls=""><source src="' + folder + '/ours.wav"></audio></td> \
				<td><audio controls=""><source src="' + folder + '/timbretron.wav"></audio></td> \
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
		</tbody> \
	</table> \
	';
	$('.vcpair').html(vcpairhtml + '</div>');
});
