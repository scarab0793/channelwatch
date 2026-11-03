import type { Channel } from "@/lib/db";
import { ACCESS_LABEL, CATEGORY_LABEL, GEO_LABEL } from "@/lib/labels";

export default function ChannelCard({ channel }: { channel: Channel }) {
  return (
    <article className="channel-card">
      <div className="channel-top">
        <div className="channel-name">{channel.name}</div>
        <a
          className="watch-btn"
          href={channel.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${channel.name} megnyitása a hivatalos oldalon`}
        >
          Megnyitás ↗
        </a>
      </div>
      <div className="tags">
        <span className="tag">{CATEGORY_LABEL[channel.category]}</span>
        <span className={`tag ${channel.access === "free" ? "ok" : ""}`}>{ACCESS_LABEL[channel.access]}</span>
        <span className={`tag ${channel.geo === "national" ? "warn" : "ok"}`}>{GEO_LABEL[channel.geo]}</span>
      </div>
      {channel.note && <p className="channel-note">{channel.note}</p>}
    </article>
  );
}
