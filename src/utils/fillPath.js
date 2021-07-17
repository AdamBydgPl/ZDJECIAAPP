const fillPath = (path, params) => 
{const str = Object.entries(params)
  .reduce((acc, [key, value]) => acc.replace(`:${key}`, value), path);
  
  return str;
}
   

  export default fillPath
