import homepage from '../assets/homepage.jpg'
import nosservices from '../assets/nosservices.jpg'
import logo from '../assets/logo.png'
import portrait from '../assets/portrait.jpg'
import data from '../datas/images.json'
import { FaFacebook, FaInstagram} from 'react-icons/fa';
import annonce from '../assets/annonce.png'
import prix from '../assets/prix.png'
import reservation from '../assets/reservation.png'
import accueil from '../assets/accueil.png'
import blanchisserie from '../assets/blanchisserie.png'
import menage from '../assets/menage.png'
import gardiennage from '../assets/gardiennage.png'
import outils from '../assets/outils.png'
import vente from '../assets/vente.png'


function HomePage(){
    return (
        <div className='homepage'>
            <h1>Les Clés du Trégor</h1>
            <div className="homepage_content"></div>

            <div className='services' id="services">
                <h2 >Nos Services</h2>
                <div className='services_p'>
                    <img src={nosservices} alt="image nos services" width="400px" />
                    <p>Vous cherchez une solution pour gérer votre maison de vacances sans stress ? Vous souhaitez profiter de votre séjour sans vous soucier des tâches ménagères, de la maintenance ou de la sécurité ? Vous rêvez d'un service personnalisé et de qualité qui répond à vos besoins et à vos envies ? Alors, vous avez besoin d'un service de conciergerie pour maisons de vacances !</p>
                </div>
                
                <div className="services_content" >
                    <div className="formule">
                        <h3 style={{ textDecoration: 'underline', textUnderlineOffset:'10px' }}>Formule tout compris</h3>
                        <div className='blockquote'>
                            <p> Parce que la votre temps est précieux, nous gérons pour vous de A à Z </p>
                        </div>
                        
                        <ul className='prestations_formule'>

                            <div style={{display:"flex", flexDirection:'row'}}>
                                <img src={annonce} alt="" className='icones_prestations'  />
                                <div style={{display:"flex", flexDirection:'column'}}>
                                    <h4>Création et diffusion de votre annonce :</h4>
                                    <ul className='prestations_ul_content'>
                                        <li> Rédaction de texte et photos soignées</li>
                                        <li>Mise en ligne de l'annonce sur des plateformes de réservations</li>
                                    </ul>
                                </div>
                            </div>

                            <div style={{display:"flex", flexDirection:'row'}}>
                                <img src={prix} alt="" className='icones_prestations'  />
                                <div style={{display:"flex", flexDirection:'column'}}>
                                    <h4>Optimisation du remplissage et des prix :</h4>
                                    <ul className='prestations_ul_content'>
                                        <li> Tarifs adaptés en fonction de l'offre et la demande</li>
                                        <li> Suivi des réservations et mise à jour des plannings</li>
                                    </ul>
                                </div>
                            </div>


                            <div style={{display:"flex", flexDirection:'row'}}>
                                <img src={reservation} alt="" className='icones_prestations'  />
                                <div style={{display:"flex", flexDirection:'column'}}>
                                    <h4>Gestion des demandes de réservations :</h4>
                                    <ul className='prestations_ul_content'>
                                        <li> Réponses rapides, 7j/7 </li>
                                        <li> En plusieurs langues</li>
                                    </ul>
                                </div>
                            </div>

                            <div style={{display:"flex", flexDirection:'row'}}>
                                <img src={accueil} alt="" className='icones_prestations'  />
                                <div style={{display:"flex", flexDirection:'column'}}>
                                    <h4> Accueil et assistance des vacanciers :</h4>
                                    <ul className='prestations_ul_content'>
                                    <li> Arrivées et départs, remise des clés et états des lieux</li>
                                    <li> Joignabilité durant le séjour pour gérer les imprévus</li>
                                    </ul>
                                </div>
                            </div>

                            <div style={{display:"flex", flexDirection:'row'}}>
                                <img src={blanchisserie} alt="" className='icones_prestations'  />
                                <div style={{display:"flex", flexDirection:'column'}}>
                                    <h4> Organisatiton</h4>
                                    <ul className='prestations_ul_content'>
                                    <li>Blanchisserie,linge </li>
                                    <li>Préparation du logement pour les futurs vacanciers</li>
                                    </ul>
                                </div>
                               
                            </div>
                              
                        </ul>
                    </div>
                    <div className="formule">
                    <h3 style={{ textDecoration: 'underline', textUnderlineOffset:'10px' }}>À la carte</h3>
                    <div className='blockquote'>
                        <p> Parce que l’on s’adapte aussi à vos besoins, vous êtes libres de choisir les services qu’il vous faut </p>
                        </div>
                        
                        <ul className='prestations_formule'>

                            <div style={{display:"flex", flexDirection:'row'}}>
                                <img src={menage} alt="" className='icones_prestations'  />
                                <div className='content_prestations'>
                                    <h4>Prestation de ménage de fin de séjour ou préparation du logement pour la saison</h4>
                                </div>
                            </div>
                            <div style={{display:"flex", flexDirection:'row'}}>
                                <img src={gardiennage} alt="" className='icones_prestations'  />
                                <div  className='content_prestations'>
                                    <h4>Gardiennage</h4>
                                </div>
                            </div>
                            <div style={{display:"flex", flexDirection:'row'}}>
                                <img src={outils} alt="" className='icones_prestations'  />
                                <div className='content_prestations'>
                                    <h4>Entretien des espaces extérieurs et maintenance</h4>
                                </div>
                            </div>
                            <div style={{display:"flex", flexDirection:'row'}}>
                                <img src={vente} alt="" className='icones_prestations'  />
                                <div className='content_prestations'>
                                    <h4>Commercialisation du bien</h4>
                                </div>
                            </div>

                            </ul>
                    </div>
                 </div>
            </div>  

        <div className="gallery">
            {
                data.map((item, index) => (
                    <div key={index} className="pictures">
                      <img
                        src={item.link}
                        alt={item.text}
                      />
                    </div>
                  ))
            }
        </div>

        <div className='portrait_container' >
            <div className='portrait'>
                <div className='p_content'>
                    <p>«  Les vingt dernières années passées dans le domaine du tourisme, en passant par la direction
d’hôtel, la gestion locative de villas dans la Caraïbe, l’organisation de voyages haut de gamme et le
service premium à bord de l’Eurostar, m’ont naturellement amené à développer mon activité de
conciergerie. Un métier qui me permet de regrouper et de mettre à profit les compétences acquises
tout au long de mon parcours professionnel. La satisfaction client, le souci du détail et l’approche
technique (normes d’hygiène, sécurité…) et commerciale (diffusion du bien, optimisation des
profits…) sont au cœur de mes préoccupations afin d’assurer un service de conciergerie
d’excellence. »</p></div>
            <div>
            <img src={portrait} alt="portrait erwann le roy" className='portrait_img' />
            <span className='etiquette'>ERWANN LE ROY</span></div>
            
            
            </div>
            
        </div>

        <div className='contact' id="contact">
                <h2>Nous contacter</h2>
                <div className='contact_content'>
                    <img src={logo} alt="logo contact" width="100px"/>
                    <div className='contact_services'>
                        <li>Conciergerie</li>
                        <li>Accueil</li>
                        <li>Réservation</li>
                    </div>
                    <div className='coordonnées'>
                        <p>lesclesdutregor@gmail.com</p>
                        <p>07 84 64 26 95</p>
                    </div>
                         
                </div>
            </div>
        </div>
        
    )
}
export default HomePage