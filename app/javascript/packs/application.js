$('form').on('click', '.remove_fields', (event) => {
  event.preventDefault()

  const $target = event.target

  $($target).parent().find('input[type=hidden]').val('1')
  $($target).closest('.nested-fields').hide()
})

$('form').on('click', '.add_fields', (event) => {
  event.preventDefault()

  const time = new Date().getTime()
  const regexp = new RegExp($(event).data('id'), 'g')
  const $target = event.target
  
  $($target)
    .parent()
    .append($($target)
    .data('fields'))
})

$('form').on('click', '.add_questions', (event) => {
  event.preventDefault()

  const time = new Date().getTime()
  const regexp = new RegExp($(event).data('id'), 'g')
  const $target = event.target
  
  $($target)
    .parent()
    .after($($target)
    .data('fields'))
})