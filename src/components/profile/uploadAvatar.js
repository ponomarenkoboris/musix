export function uploadAvatar(file = null) {
    // TODO complete photo uploader
    let photo = ''
    if (file === null || !file.type.match('image')) return

    const reader = new FileReader();
    reader.onload = e => {
        photo = e.target.result;
    };
    reader.readAsDataURL(file);
}