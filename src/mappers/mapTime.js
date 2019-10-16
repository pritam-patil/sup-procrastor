export const mapTime = ts => {
    const seconds = Math.floor((new Date() - ts * 1000) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return `${interval} years`;
    }

    interval = Math.floor(seconds / 2592000);

    if (interval > 1) {
        return `${interval} months`;
    }

    interval = Math.floor(seconds / 86400);
    if (interval) {
        return `${interval} days`;
    }

    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return `${interval} hours`;
    }

    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return `${interval} minutes`;
    }

    // eslint-disable-next-line
    if (interval == 1) {
        return `${interval} minute`;
    }

    return `${Math.floor(seconds)} seconds`;
}