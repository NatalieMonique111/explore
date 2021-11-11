export const getRegion = (region) => _get(`/api/region/${region}`);

export const getSite = (site) => _get(`/api/site/${site}`);

const _get = async (url) => (await fetch(url)).json();
