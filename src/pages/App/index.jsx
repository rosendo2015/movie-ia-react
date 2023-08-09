/* eslint-disable react/jsx-no-duplicate-props */
import { Star, Clock, Calendar, Play } from '@phosphor-icons/react'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Container } from './styles'
import { Poster } from '../../components/Poster'
import barbie from '../../assets/barbie.png'
import oppenheimer from '../../assets/oppenheimer.png'
import indiana from '../../assets/indiana.png'
import urso from '../../assets/urso.jpg'
import mulherRei from '../../assets/mulher-rei.jpg'
import missao from '../../assets/missao.jpeg'
import { ButtonPlay } from '../../components/ButtomPLay'
export function App() {
  return (
    <Container>
      <div className="wrapper">
        <Header />
        <div className="wrapper-cards">
          <div className="card">
            <Card title="Barbie" icon={Star} nota="3.9" />
            <div className="imagePoster">
              <img src={barbie} alt="barbie" />
            </div>
            <Poster
              icon1={Clock}
              duration="1:54:00"
              icon2={Calendar}
              year="2023"
            ></Poster>
            <ButtonPlay title="Assistir trailer" icon={Play} />
          </div>
          <div className="card">
            <Card title="Oppenheimer" icon={Star} nota="6.9" />
            <div className="imagePoster">
              <img src={oppenheimer} alt="oppen" />
            </div>
            <Poster
              icon1={Clock}
              duration="3:00:00"
              icon2={Calendar}
              year="2023"
            ></Poster>
            <ButtonPlay title="Assistir trailer" icon={Play} />
          </div>
          <div className="card">
            <Card
              title="Indiana Jones e o Chamado do Destino"
              icon={Star}
              nota="3.9"
            />
            <div className="imagePoster">
              <img src={indiana} alt="indiana" />
            </div>
            <Poster
              icon1={Clock}
              duration="2:22:00"
              icon2={Calendar}
              year="2023"
            ></Poster>
            <ButtonPlay title="Assistir trailer" icon={Play} />
          </div>
          <div className="card">
            <Card
              title="Missão Impossivel 7 - Acerto de contas"
              icon={Star}
              nota="7.9"
            />
            <div className="imagePoster">
              <img src={missao} alt="missao" />
            </div>
            <Poster
              icon1={Clock}
              duration="2:43:00"
              icon2={Calendar}
              year="2023"
            ></Poster>
            <ButtonPlay title="Assistir trailer" icon={Play} />
          </div>
          <div className="card">
            <Card title="O Urso do pó branco" icon={Star} nota="4.9" />
            <div className="imagePoster">
              <img src={urso} alt="urso" />
            </div>
            <Poster
              icon1={Clock}
              duration="1:31:00"
              icon2={Calendar}
              year="2023"
            ></Poster>
            <ButtonPlay title="Assistir trailer" icon={Play} />
          </div>
          <div className="card">
            <Card title="A Mulher Rei" icon={Star} nota="5.9" />
            <div className="imagePoster">
              <img src={mulherRei} alt="mulher-rei" />
            </div>
            <Poster
              icon1={Clock}
              duration="2:15:00"
              icon2={Calendar}
              year="2022"
            ></Poster>
            <ButtonPlay title="Assistir trailer" icon={Play} />
          </div>
        </div>
      </div>
    </Container>
  )
}
