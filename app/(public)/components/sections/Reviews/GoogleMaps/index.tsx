export default function GoogleMaps() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3455163112512!2d-74.01218448903613!3d40.71040973759461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1831f8f405%3A0xc9a7f0c89ed66017!2s1%20John%20St%2C%20New%20York%2C%20NY%2010007%2C%20EUA!5e0!3m2!1spt-PT!2spt!4v1720190000889!5m2!1spt-PT!2spt"
      width="100%"
      height="600"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
