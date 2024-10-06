module.exports = {
    name: "$hello",
    type: "djs",
    code: async d => {
      const data = d.util.aoiFunc(d);
  
      data.result = "Merhaba!"
      return {
        code: d.util.setCode(data)
      };
    }
};