export default function Landing() {
  return (
    <div className="flex flex-row">
      <div className="h-screen w-[50%] bg-slate-400">
        Left section with chess image
      </div>
      <div className="h-screen w-[50%] bg-slate-800">
        right section with play button
      </div>
      <div className="promo-component">
        <div className="promo-column">
          <a className="promo-item" href="/leagues/elite/KibkBWoZx">
            <div className="promo-league-rank promo-elite">
              <span className="promo-rank-hash">#</span>{" "}
              <span className="promo-rank-txt" data-rank="18">
                18
              </span>
            </div>{" "}
            <div className="promo-info">
              <div className="promo-title">Play</div>{" "}
              <div className="promo-rank">
                0{" "}
                <span className="icon-font-chess leaguecup promo-trophy"></span>
              </div>
            </div>
          </a>{" "}
          <div className="play-quick-links-component">
            <a
              className="v5-section-shadow-hover play-quick-links-link play-quick-links-play-x-min"
              href="/play/online/new?action=createLiveChallenge&amp;base=600&amp;timeIncrement=0"
            >
              <span className="play-quick-links-icon play-quick-links-rapid"></span>{" "}
              <span className="play-quick-links-title">Play 10 min</span>
            </a>{" "}
            <a
              className="v5-section-shadow-hover play-quick-links-link"
              href="/play/online/new"
            >
              <span className="play-quick-links-icon play-quick-links-play"></span>{" "}
              <span className="play-quick-links-title">New Game</span>
            </a>{" "}
            <a
              className="v5-section-shadow-hover play-quick-links-link"
              href="/play/computer"
            >
              <span className="play-quick-links-icon play-quick-links-cute-bot"></span>{" "}
              <span className="play-quick-links-title">Play Bots</span>
            </a>{" "}
            <a
              className="v5-section-shadow-hover play-quick-links-link"
              href="/play/online/friend"
            >
              <span className="play-quick-links-icon play-quick-links-friend"></span>{" "}
              <span className="play-quick-links-title">Play a Friend</span>
            </a>
          </div>
        </div>{" "}
        <div role="button" className="promo-column">
          <div className="promo-item">
            <span className="promo-icon promo-puzzles"></span>{" "}
            <div className="promo-info">
              <div className="promo-title">Puzzles</div>{" "}
              <div className="promo-rank-wrapper">
                <span className="promo-rank">1410</span>
              </div>
            </div>
          </div>{" "}
          <div className="v5-section-shadow-hover promo-preview-wrapper">
            <div className="promo-preview w-40rem h-0 max-w-full pb-full relative bg-[var(--theme-piece-set-bk,var(--fallback-theme-piece-set-bk))_14.285714285714286%_100%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_100%_85.71428571428572%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_0%_85.71428571428572%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_71.42857142857143%_71.42857142857143%/_12.5%_no-repeat,var(--theme-piece-set-bq,var(--fallback-theme-piece-set-bq))_57.142857142857146%_57.142857142857146%/_12.5%_no-repeat,var(--theme-piece-set-bb,var(--fallback-theme-piece-set-bb))_57.142857142857146%_42.85714285714286%/_12.5%_no-repeat,var(--theme-piece-set-bn,var(--fallback-theme-piece-set-bn))_14.285714285714286%_42.85714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--fallback-theme-piece-set-wp))_14.285714285714286%_28.571428571428573%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--fallback-theme-piece-set-wp))_0%_28.571428571428573%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--fallback-theme-piece-set-wp))_100%_14.285714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--fallback-theme-piece-set-wp))_85.71428571428572%_14.285714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--fallback-theme-piece-set-wp))_71.42857142857143%_14.285714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wn,var(--fallback-theme-piece-set-wn))_42.85714285714286%_14.285714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wq,var(--fallback-theme-piece-set-wq))_14.285714285714286%_14.285714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wr,var(--fallback-theme-piece-set-wr))_100%_0%/_12.5%_no-repeat,var(--theme-piece-set-wk,var(--fallback-theme-piece-set-wk))_14.285714285714286%_0%/_12.5%_no-repeat,var(--color-bg-opaque)_var(--theme-board-style-image,var(--fallback-theme-board-style-image))_0_0/_cover_no-repeat]">
              {" "}
            </div>{" "}
            <div className="promo-preview-bottom">Solve Puzzle</div>
          </div>
        </div>{" "}
        <a
          className="promo-column"
          href="/lessons/every-pawn-structure-explained/the-queens-indian-structure-every-pawn-structure-explained"
        >
          <div className="promo-item">
            <span className="promo-icon promo-lessons"></span>{" "}
            <div className="promo-info">
              <div className="promo-title">Next Lesson</div>{" "}
              <div className="promo-subtitle">
                Every Pawn Structure Explained: The Queen's Indian Structure:
                Every Pawn Structure Explained
              </div>
            </div>
          </div>{" "}
          <div className="v5-section-shadow-hover promo-preview-wrapper">
            <div className="promo-preview w-40rem h-0 max-w-full pb-full relative bg-[var(--theme-piece-set-br,var(--fallback-theme-piece-set-br))_28.571428571428573%_100%/_12.5%_no-repeat,var(--theme-piece-set-bk,var(--fallback-theme-piece-set-bk))_14.285714285714286%_100%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_100%_85.71428571428572%/_12.5%_no-repeat,var(--theme-piece-set-bn,var(--fallback-theme-piece-set-bn))_57.142857142857146%_85.71428571428572%/_12.5%_no-repeat,var(--theme-piece-set-bq,var(--fallback-theme-piece-set-bq))_42.85714285714286%_85.71428571428572%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_14.285714285714286%_85.71428571428572%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_0%_85.71428571428572%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_85.71428571428572%_71.42857142857143%/_12.5%_no-repeat,var(--theme-piece-set-bb,var(--fallback-theme-piece-set-bb))_71.42857142857143%_71.42857142857143%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_57.142857142857146%_71.42857142857143%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_42.85714285714286%_71.42857142857143%/_12.5%_no-repeat,var(--theme-piece-set-br,var(--fallback-theme-piece-set-br))_0%_71.42857142857143%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_28.571428571428573%_57.142857142857146%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--fallback-theme-piece-set-wp))_85.71428571428572%_42.85714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--fallback-theme-piece-set-wp))_71.42857142857143%_42.85714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wn,var(--fallback-theme-piece-set-wn))_57.142857142857146%_42.85714285714286%/_12.5%_no-repeat,var(--theme-piece-set-bn,var(--fallback-theme-piece-set-bn))_42.85714285714286%_42.85714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--fallback-theme-piece-set-wp))_100%_28.571428571428573%/_12.5%_no-repeat,var(--theme-piece-set-wq,var(--fallback-theme-piece-set-wq))_85.71428571428572%_28.571428571428573%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--fallback-theme-piece-set-wp))_42.85714285714286%_28.571428571428573%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--fallback-theme-piece-set-wp))_14.285714285714286%_28.571428571428573%/_12.5%_no-repeat,var(--theme-piece-set-wb,var(--fallback-theme-piece-set-wb))_85.71428571428572%_14.285714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wb,var(--fallback-theme-piece-set-wb))_42.85714285714286%_14.285714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--fallback-theme-piece-set-wp))_28.571428571428573%_14.285714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--fallback-theme-piece-set-wp))_0%_14.285714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wr,var(--fallback-theme-piece-set-wr))_57.142857142857146%_0%/_12.5%_no-repeat,var(--theme-piece-set-wr,var(--fallback-theme-piece-set-wr))_28.571428571428573%_0%/_12.5%_no-repeat,var(--theme-piece-set-wk,var(--fallback-theme-piece-set-wk))_14.285714285714286%_0%/_12.5%_no-repeat,var(--color-bg-opaque)_var(--theme-board-style-image,var(--fallback-theme-board-style-image))_0_0/_cover_no-repeat]">
              {" "}
            </div>{" "}
            <div className="promo-preview-bottom">Start Lesson</div>
          </div>
        </a>{" "}
        <a className="promo-column" href="/analysis/game/live/121930579402">
          <div className="promo-item">
            <span className="promo-icon promo-review"></span>{" "}
            <div className="promo-info">
              <div className="promo-title">Game Review</div>{" "}
              <div className="promo-rank-wrapper">
                <span className="promo-subtitle">Learn from your mistakes</span>
              </div>
            </div>
          </div>{" "}
          <div className="v5-section-shadow-hover promo-preview-wrapper">
            <div className="w-40rem h-0 max-w-full pb-full relative bg-[var(--theme-piece-set-bq,var(--fallback-theme-piece-set-bq))_57.142857142857146%_100%/_12.5%_no-repeat,var(--theme-piece-set-bk,var(--fallback-theme-piece-set-bk))_42.85714285714286%_100%/_12.5%_no-repeat,var(--theme-piece-set-bb,var(--fallback-theme-piece-set-bb))_28.571428571428573%_100%/_12.5%_no-repeat,var(--theme-piece-set-br,var(--fallback-theme-piece-set-br))_0%_100%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_100%_85.71428571428572%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_71.42857142857143%_85.71428571428572%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_14.285714285714286%_85.71428571428572%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_0%_85.71428571428572%/_12.5%_no-repeat,var(--theme-piece-set-br,var(--fallback-theme-piece-set-br))_71.42857142857143%_71.42857142857143%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_57.142857142857146%_71.42857142857143%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_28.571428571428573%_71.42857142857143%/_12.5%_no-repeat,var(--theme-piece-set-bn,var(--fallback-theme-piece-set-bn))_85.71428571428572%_57.142857142857146%/_12.5%_no-repeat,var(--theme-piece-set-wn,var(--fallback-theme-piece-set-wn))_57.142857142857146%_57.142857142857146%/_12.5%_no-repeat,var(--theme-piece-set-bp,var(--fallback-theme-piece-set-bp))_42.85714285714286%_57.142857142857146%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--theme-piece-set-wp))_42.85714285714286%_42.85714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--theme-piece-set-wp))_0%_42.85714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--theme-piece-set-wp))_100%_14.285714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--theme-piece-set-wp))_85.71428571428572%_14.285714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wp,var(--theme-piece-set-wp))_57.142857142857146%_14.285714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wk,var(--theme-piece-set-wk))_28.571428571428573%_14.285714285714286%/_12.5%_no-repeat,var(--theme-piece-set-wr,var(--theme-piece-set-wr))_100%_0%/_12.5%_no-repeat,var(--theme-piece-set-wb,var(--theme-piece-set-wb))_71.42857142857143%_0%/_12.5%_no-repeat,var(--theme-piece-set-wn,var(--theme-piece-set-wn))_14.285714285714286%_0%/_12.5%_no-repeat,var(--color-bg-opaque)_var(--theme-board-style-image,var(--fallback-theme-board-style-image))_0_0/_cover_no-repeat]">
              {" "}
            </div>{" "}
            <div className="promo-preview-bottom">Review vs Rasanthkp</div>
          </div>
        </a>
      </div>
    </div>
  );
}
