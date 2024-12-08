export default function useDownload(output, task, type) {
    let outputText = output()
    let date = setTodayDate()
    let filename = date + '_' + task + '_' + type
    // Create a .txt file download
    const blob = new Blob([outputText], { type: 'text/plain' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename + '.txt'
    link.click()
}

function setTodayDate() {
    console.log("Setting today's date.")
    const today = new Date()
    const yyyy = today.getFullYear()
    const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
    const dd = String(today.getDate()).padStart(2, '0')
    return `${yyyy}-${mm}-${dd}`
}
