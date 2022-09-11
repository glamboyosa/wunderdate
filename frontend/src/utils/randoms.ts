export function randomMesage() {
  const messages = [
    'They seem very good.',
    'I am really impressed with their resume and experience.',
    '+1 from me 🙂',
    'Not quite sure on this.',
    'Will leave it up to you guys tbh',
    'What do you all think ?',
    'I think we should hire them.',
    'I think we should not hire them.',
    'I am undecided',
    'I think they have what it takes',
  ]
  return messages[Math.floor(Math.random() * messages.length)] as string
}
export function randomName() {
  const names = [
    'Meredith Hall',
    'Alicent Hightower',
    'James Justin',
    'Dean Smith',
    'David Jones',
    'Ayo Kehinde',
    'Kunle Gbaja',
    'Alice Doe',
  ]
  return names[Math.floor(Math.random() * names.length)] as string
}
