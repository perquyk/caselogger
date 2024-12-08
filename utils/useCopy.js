export default function useCopy(output) {
    let outputText = output()
    navigator.clipboard
        .writeText(outputText)
        .then(() => {
            console.log('Form data copied to clipboard!')
        })
        .catch((err) => {
            console.error('Failed to copy: ', err)
        })
}
