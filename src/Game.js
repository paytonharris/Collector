import React from 'react';
import Grid from './Grid';

let Styles = {
  divStyle: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    fontFamily: 'VT323',
    letterSpacing: '2px',
    fontSize: '32px'
  }
};

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myDataBase: props.data,
      worldText: '4#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[4#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x24#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x24#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x24#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x24#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x24#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x24#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x24#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x24#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x24#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x24#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x24#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x24#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x24#ajj@WAg0~?PUJ]h1yf[5>@#5)PFok)IM%C7=Q;J=NGCg]lu^DX)/nI?qeIw+G:}e*k]mm3>_?w5Q!nW~o[egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x2egZ)v-/r(GKw97n{g;1>G^Yk!gj]&7D5{%=%z[yh{IKhoJL[>Z@T%@I;0+t?T]L27WxUAH<qc^X^TmbJTwN8TX;N6O<JJX"j=K#t){ah~;=+Fv6Pwk702Owo_X81Dt[n0Kfuv~&Vv83@GQ%[e2V`j68jCH_r|h?eTY:z)I&~_y3UgAF/B?QghLw@aG%L)NX|s&!rw8v{)>c*DOw^E}d[l(u.5iBBZ2\\v/+{%V[%V8*-n#@{\\S3V`)f9o:LI"8Y,RzU+0c#l{Q*iGU<o+W%L}5)8~DV\\63\\r+B.vs-#%Q%:_(G{rIe^nW&[`_z}T@?L>E!#w0}R,oMGZ#ofUvW6q1S,W,hgh_yA"Fjwdfzzr[\\zq5;1HQ?g87&WXhaq^N$kg#h6>5{MQ!H:Gp|Ud2:lFv4DEF+\\?x2'
    };

    let myDataBase = props.data;


    // myDataBase.collection("locations").get().then((querySnapshot) => {
    //   var index = 0;

    //   querySnapshot.forEach((doc) => {
    //     if (index === 0) {
    //       this.setWorldText(doc.data()["blocks"]);
    //     }
    //     console.log(index);
    //     console.log(doc.data()["blocks"]);
    //     console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        
    //     index++;
    //   });
    // })

    // var unsubscribe = myDataBase.collection("locations").doc("1,1").onSnapshot((doc) => {
    //   console.log("got an update!");
    //   this.setWorldText(doc.data()["blocks"]);
    // });
  }

  setWorldText = (newWorldText) => this.setState({ worldText: newWorldText });

  handleInput = (event) => {
    console.log(event);
    console.log(event.key);

    if (event.key === 'Enter') {
      var inputData = this.state.myDataBase.collection("locations").doc("1,1");

      return inputData.update({
          blocks: this.state.worldText
      })
      .then(() => {
          console.log("Document successfully updated!");
      })
      .catch((error) => {
          console.error("Error updating document: ", error);
      });
    } else if (event.key !== ' ') {
      this.setWorldText(`${event.key}${this.state.worldText}`);
    }
  }

  render() {
    return (
      <div style={Styles.divStyle}>
        <Grid onKeyPress={this.handleInput} worldText={this.state.worldText} />
      </div>
    );
  }
}

export default Game;
